from django.contrib import admin
from .models.campanha import Campanha
from .models.raca import Raca
from .models.classe import Classe


admin.site.register(Campanha)
admin.site.register(Raca)
admin.site.register(Classe)