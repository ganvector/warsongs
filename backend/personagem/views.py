from rest_framework import viewsets
from rest_framework import permissions

from personagem.models.personagem import Personagem
from personagem.serializers import PersonagemSerializer


class PersonagemViewSet(viewsets.ModelViewSet):
    queryset = Personagem.objects.all()
    serializer_class = PersonagemSerializer
    permission_classes = [permissions.IsAuthenticated]