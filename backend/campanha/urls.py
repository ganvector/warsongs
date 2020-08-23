from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'get_all', views.CampanhaViewSet)
router.register(r'aventuras', views.AventuraViewSet)
router.register(r'racas', views.RacaViewSet)
router.register(r'classes', views.ClasseViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
