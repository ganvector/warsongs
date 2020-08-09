from django.conf import settings
from django.db import models
from django.utils import timezone
from .campanha import Campanha


class Aventura(models.Model):
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()

    def __str__(self):
        return f'CAMPANHA: {self.campanha.titulo} - AVENTURA: {self.titulo}'