from django.contrib import admin
from .models.campanha import Campanha
from .models.raca import Raca
from .models.classe import Classe, CaracteristicasClasse
from .models.aventura import Aventura
from .models.sessao import Sessao


admin.site.register(Campanha)
admin.site.register(Aventura)
admin.site.register(Sessao)
admin.site.register(Raca)
admin.site.register(Classe)
admin.site.register(CaracteristicasClasse)
