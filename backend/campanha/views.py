from rest_framework import viewsets
from rest_framework import permissions

from campanha.models.campanha import Campanha
from campanha.models.aventura import Aventura
from campanha.models.classe import Classe
from campanha.models.raca import Raca
from campanha.serializers import CampanhaSerializer, AventuraSerializer, RacaSerializer, ClasseSerializer


class CampanhaViewSet(viewsets.ModelViewSet):
    queryset = Campanha.objects.all()
    serializer_class = CampanhaSerializer
    permission_classes = [permissions.IsAuthenticated]


class AventuraViewSet(viewsets.ModelViewSet):
    queryset = Aventura.objects.all()
    serializer_class = AventuraSerializer
    permission_classes = [permissions.IsAuthenticated]


class RacaViewSet(viewsets.ModelViewSet):
    queryset = Raca.objects.all()
    serializer_class = RacaSerializer
    permission_classes = [permissions.IsAuthenticated]


class ClasseViewSet(viewsets.ModelViewSet):
    queryset = Classe.objects.all()
    serializer_class = ClasseSerializer
    permission_classes = [permissions.IsAuthenticated]

