from django.db import models

from .campanha import Campanha


class Proficiencia(models.Model):
    TIPO = {
        ('ArdrL', 'Armaduras Leves'),
        ('ArdrM', 'Armaduras Médias'),
        ('ArdrP', 'Armaduras Pesadas'),
        ('ArmaS', 'Armas Simples'),
        ('ArmaM', 'Armas Marcials'),
    }
    nome = models.CharField(max_length=5, choices=TIPO)

    def __str__(self):
        for i in self.TIPO:
            if i[0] == self.nome:
                return i[1]


class Pericia(models.Model):
    '''Ferefente as pericias que a classe tem possibilidade de pegar e nao as do personagem diretamente.
    '''
    TIPO = {
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

    nome = models.CharField(max_length=3, choices=TIPO)

    def __str__(self):
        for i in self.TIPO:
            if i[0] == self.nome:
                return i[1]


class Classe(models.Model):

    #
    nome = models.CharField(max_length=100)
    pericias = models.ManyToManyField(Pericia)
    proficiencias = models.ManyToManyField(Proficiencia)

    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome
