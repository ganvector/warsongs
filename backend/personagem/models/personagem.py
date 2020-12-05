import math
from django.conf import settings
from django.db import models
from campanha.models.classe import Classe
from campanha.models.campanha import Campanha
from campanha.models.raca import Raca
from usuario.models import Perfil


class PersonagemClasse:
    pass


class Personagem(models.Model):
    nome = models.CharField(max_length=200)
    nivel_total = models.IntegerField(default=1)
    jogador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    campanha = models.ForeignKey(Campanha, null=True, default=None, on_delete=models.SET_NULL)
    raca = models.ForeignKey(Raca, null=True, default=None, on_delete=models.SET_NULL)
    classes = models.ManyToManyField(Classe, through="PersonagemClasse", through_fields=('personagem', 'classe'))

    def save(self):
        super().save()
        nivel = 0
        for cp in self.classepersonagem_set.all():
            nivel += cp.nivel
        self.nivel_total = nivel

    # VALORES DE HABILIDADE
    base_for = models.IntegerField(default=10, null=False)
    base_des = models.IntegerField(default=10, null=False)
    base_con = models.IntegerField(default=10, null=False)
    base_int = models.IntegerField(default=10, null=False)
    base_sab = models.IntegerField(default=10, null=False)
    base_car = models.IntegerField(default=10, null=False)

    # VALOR TOTAL
    @property
    def total_for(self):
        total = self.base_for
        if self.raca:
            total += self.raca.bonus_for
        return total
    @property
    def total_des(self):
        total = self.base_des
        if self.raca:
            total += self.raca.bonus_des
        return total
    @property
    def total_con(self):
        total = self.base_con
        if self.raca:
            total += self.raca.bonus_con
        return total
    @property
    def total_int(self):
        total = self.base_int
        if self.raca:
            total += self.raca.bonus_int
        return total
    @property
    def total_sab(self):
        total = self.base_sab
        if self.raca:
            total += self.raca.bonus_sab
        return total
    @property
    def total_car(self):
        total = self.base_car
        if self.raca:
            total += self.raca.bonus_car
        return total

    # MODIFICADORES DOS VALORES DE HABILIDADE
    @property
    def mod_for(self):
        return math.floor((self.total_for - 10) / 2.0)
    @property
    def mod_des(self):
        return math.floor((self.total_des - 10) / 2.0)
    @property
    def mod_con(self):
        return math.floor((self.total_con - 10) / 2.0)
    @property
    def mod_int(self):
        return math.floor((self.total_int - 10) / 2.0)
    @property
    def mod_sab(self):
        return math.floor((self.total_sab - 10) / 2.0)
    @property
    def mod_car(self):
        return math.floor((self.total_car - 10) / 2.0)
    # PROFICIENCIA
    @property
    def proficiencia(self):
        return math.ceil(1 + self.nivel_total / 4)

    # class Meta:
    #     verbose_name_plural = 'personagens'
    #     fields = ['nome', 'nivel']

    def __str__(self):
        return f'[Nome: {self.nome}] - [Nivel: {self.nivel_total}]- [Player: {self.jogador.perfil}] - [Campanha: {self.campanha.titulo}]'


class PersonagemClasse(models.Model):
    nivel = models.IntegerField(default=1)
    personagem = models.ForeignKey(Personagem, on_delete=models.CASCADE)
    classe = models.ForeignKey(Classe, on_delete=models.CASCADE)