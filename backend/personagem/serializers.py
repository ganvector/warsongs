from rest_framework import serializers

from personagem.models.personagem import Personagem


class PersonagemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Personagem
        fields = '__all__'
