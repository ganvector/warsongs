from django.db import models
from django.contrib.postgres import fields
from .campanha import Campanha


class Classe(models.Model):
    PERICIAS_CHOICES = {
        ('0', 'VAZIO'),
        ('ATL', 'Atletismo'),
        ('ACR', 'Acrobacia'),
        ('FUR', 'Furtividade'),
        ('PRE', 'Prestidigitação'),
        ('ARC', 'Arcanismo'),
        ('HIS', 'História'),
        ('INV', 'Investigação'),
        ('NAT', 'Natureza'),
        ('REL', 'Religião'),
        ('ADE', 'Adestrar animais'),
        ('INT', 'Intuição'),
        ('MED', 'Medicina'),
        ('PER', 'Percepção'),
        ('SOB', 'Sobrevivência'),
        ('ATU', 'Atuação'),
        ('ENG', 'Enganação'),
        ('ITM', 'Intimidação'),
        ('PER', 'Persuação'),
    }

    # TODO implementar ferramentas em proficiencias
    PROFICIENCIA_CHOICES = {
        ('0', 'VAZIO'),
        ('ArdrL', 'Armaduras Leves'),
        ('ArdrM', 'Armaduras Médias'),
        ('ArdrP', 'Armaduras Pesadas'),
        ('ArmaS', 'Armas Simples'),
        ('ArmaM', 'Armas Marcials'),
    }

    TESTE_RESISTENCIA_CHOICES = {
        ('FOR', 'Força'),
        ('DES', 'Destreza'),
        ('CON', 'Constituição'),
        ('INT', 'Inteligência'),
        ('SAB', 'Sabedoria'),
        ('CAR', 'Carisma')
    }

    nome = models.CharField(max_length=100)

    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)

    proficiencias = fields.ArrayField(
        models.CharField(max_length=5, choices=PROFICIENCIA_CHOICES, blank=True, default='0'), default=list
    )

    pericias = fields.ArrayField(
        models.CharField(max_length=3, choices=PERICIAS_CHOICES, blank=True, default='0'), default=list
    )

    teste_resistencia = fields.ArrayField(
        models.CharField(max_length=3, choices=TESTE_RESISTENCIA_CHOICES, blank=True, default='0'), default=list, max_length=2
    )

    @property
    def caracteristicas_de_classe(self):
        return CaracteristicasClasse.objects.filter(classe=self.id)

    def adicionar_caracteristica(self, nivel, titulo, descricao):
        cc = CaracteristicasClasse()

        cc.nivel = nivel
        cc.titulo = titulo
        cc.descricao = descricao
        cc.classe = self

        cc.save()

    def __str__(self):
        return self.nome


class CaracteristicasClasse(models.Model):
    nivel = models.IntegerField(default=1)
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    classe = models.ForeignKey(Classe, on_delete=models.CASCADE)

    def to_object(self):
        return {
            "nivel": self.nivel,
            "titulo": self.titulo,
            "descricao": self.descricao
        }

    def __str__(self):
        return f'{self.nivel} - {self.titulo}'
