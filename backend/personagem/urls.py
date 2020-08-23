from django.urls import include, path
from rest_framework import routers

from personagem import views

router = routers.DefaultRouter()
router.register(r'', views.PersonagemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
