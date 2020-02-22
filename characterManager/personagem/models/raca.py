from django.db import models
from campanha.models import Campanha

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
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)
    #[for, des, con, int, sab, car]
    # valor de habiliade é custom
    vh_customizado = models.BooleanField(default=False)
    vh_for = models.IntegerField(default=0)
    vh_des = models.IntegerField(default=0)
    vh_con = models.IntegerField(default=0)
    vh_int = models.IntegerField(default=0)
    vh_sab = models.IntegerField(default=0)
    vh_car = models.IntegerField(default=0)
    tracos = models.ManyToManyField(Traco)
    idioma = models.ForeignKey(Idioma, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome