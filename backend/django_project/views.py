from django.http import JsonResponse
from django.contrib.auth.models import User

def estatisticas(request):
    qtd = User.objects.count()

    return JsonResponse({"usuarios": qtd})