from django.db import models
from .campanha import Campanha


class Traco(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome


class Idioma(models.Model):
    nome = models.CharField(max_length=100)
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome


class Raca(models.Model):

    nome = models.CharField(max_length=100, null=True)

    # Bonus
    bonus_for = models.IntegerField(default=0)
    bonus_des = models.IntegerField(default=0)
    bonus_con = models.IntegerField(default=0)
    bonus_int = models.IntegerField(default=0)
    bonus_sab = models.IntegerField(default=0)
    bonus_car = models.IntegerField(default=0)

    tracos = models.ManyToManyField(Traco)
    idioma = models.ForeignKey(Idioma, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome
