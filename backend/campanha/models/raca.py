from django.db import models
from .campanha import Campanha


class Raca(models.Model):

    nome = models.CharField(max_length=100, null=True)

    # Bonus
    bonus_for = models.IntegerField(default=0)
    bonus_des = models.IntegerField(default=0)
    bonus_con = models.IntegerField(default=0)
    bonus_int = models.IntegerField(default=0)
    bonus_sab = models.IntegerField(default=0)
    bonus_car = models.IntegerField(default=0)

    idioma = models.CharField(max_length=30, null=True)

    campanha = models.ForeignKey(Campanha, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

    def adicionar_traco(self, nome, descricao):
        traco = Traco()
        traco.nome = nome
        traco.descricao = descricao
        traco.campanha = self.campanha
        traco.raca = self
        traco.save()

    def get_tracos(self):
        return self.traco_set.all()


class Traco(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    campanha = models.ForeignKey(Campanha, null=False, on_delete=models.CASCADE)
    raca = models.ForeignKey(Raca, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome