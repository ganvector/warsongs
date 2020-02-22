from django.contrib import admin
from personagem.models.personagem import Personagem
from personagem.models.raca import Traco, Idioma, Raca
from personagem.models.classe import Classe

# Register your models here.
admin.site.register(Personagem)
admin.site.register(Traco)
admin.site.register(Idioma)
admin.site.register(Raca)
admin.site.register(Classe)