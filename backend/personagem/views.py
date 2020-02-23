from django.http import JsonResponse
from .models.personagem import Personagem
from django.contrib.auth.models import User, AnonymousUser


def get_personagens(request):
    personagens = [
            {
                'nome': 'Personagem 1',
                'nivel': 2,
                'classes': [
                    'lvl xx',
                    'lvl xy'
                ] 
            },
            {
                'nome': 'Personagem 2',
                'nivel': 3,
                'classes': [
                    'lvl xx',
                    'lvl xy',
                    'lvl yy'
                ] 
            }
    ]

    qtd = User.objects.count()
    user = User.objects.first()
    print(f'User {request.user}')

    if(type(request.user) != AnonymousUser):
        #personagens = Campanha.objects.filter(mestre=user)
        if personagens:
            personagens = personagens
        else:
            personagens = 'Vazio'
    else:
        personagens = 'you must be logged in to see your campaigns'
    return JsonResponse({"personagens": personagens})