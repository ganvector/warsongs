from django.conf import settings
from django.db import models
from django.utils import timezone


class Campanha(models.Model):
    mestre = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data_criacao = models.DateField(default=timezone.now)

    def __str__(self):
        return f'[Titulo: {self.titulo}] - [Mestre: {self.mestre.username}]'