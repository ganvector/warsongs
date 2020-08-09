from django.conf import settings
from django.db import models
from django.utils import timezone
from .aventura import Aventura


class Sessao(models.Model):
    aventura = models.ForeignKey(Aventura, null=True, default=None, on_delete=models.SET_NULL)

    titulo = models.CharField(max_length=200)
    descricao = models.TextField()

    def __str__(self):
        return f'CAMPANHA: {self.aventura.campanha.titulo} - AVENTURA: {self.aventura.titulo} - SESSAO: {self.titulo}'