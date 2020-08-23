from rest_framework import serializers

from .models.campanha import Campanha
from .models.aventura import Aventura
from .models.classe import Classe
from .models.raca import Raca


class CampanhaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Campanha
        fields = '__all__'


class AventuraSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Aventura
        fields = '__all__'


class RacaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Raca
        fields = '__all__'


class ClasseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Classe
        fields = '__all__'


