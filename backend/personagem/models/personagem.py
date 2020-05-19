import math
from django.conf import settings
from django.db import models
from .classe import Classe
from campanha.models import Campanha
from .raca import Raca


class ClasseDePersonagem:
    pass


class Personagem(models.Model):
    nome = models.CharField(max_length=200)
    nivel_total = models.IntegerField(default=1)
    jogador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)
    raca = models.ForeignKey(Raca, null=True, default=None, on_delete=models.SET_NULL)
    classes = models.ManyToManyField(Classe, through="ClasseDePersonagem", through_fields=('personagem', 'classe'))

    def save(self):
        super().save()
        nivel = 0
        for cp in self.classedepersonagem_set.all():
            nivel += cp.nivel
        self.nivel_total = nivel

    # VALORES DE HABILIDADE
    base_for = models.IntegerField(default=10, null=False)
    base_des = models.IntegerField(default=10, null=False)
    base_con = models.IntegerField(default=10, null=False)
    base_int = models.IntegerField(default=10, null=False)
    base_sab = models.IntegerField(default=10, null=False)
    base_car = models.IntegerField(default=10, null=False)

    # MODIFICADORES DOS VALORES DE HABILIDADE
    @property
    def mod_for(self):
        return math.floor((self.vh_for - 10) / 2.0)
    @property
    def mod_des(self):
        return math.floor((self.vh_des - 10) / 2.0)
    @property
    def mod_con(self):
        return math.floor((self.vh_con - 10) / 2.0)
    @property
    def mod_int(self):
        return math.floor((self.vh_int - 10) / 2.0)
    @property
    def mod_sab(self):
        return math.floor((self.vh_sab - 10) / 2.0)
    @property
    def mod_car(self):
        return math.floor((self.vh_car - 10) / 2.0)
    # PROFICIENCIA
    @property
    def proficiencia(self):
        return math.ceil(1 + self.nivel_total / 4)

    # class Meta:
    #     verbose_name_plural = 'personagens'
    #     fields = ['nome', 'nivel']

    def __str__(self):
        return f'[Nome: {self.nome}] - [Nivel: {self.nivel_total}]- [Player: {self.jogador.username}] - [Campanha: {self.campanha.titulo}]'

class ClasseDePersonagem(models.Model):
    nivel = models.IntegerField(default=1)
    personagem = models.ForeignKey(Personagem, on_delete=models.CASCADE)
    classe = models.ForeignKey(Classe, on_delete=models.CASCADE)
