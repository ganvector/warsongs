from django.http import JsonResponse
from .models.personagem import Personagem
from django.contrib.auth.models import User, AnonymousUser


def get_personagens(request):

    qtd = User.objects.count()
    user = User.objects.first()
    print(f'User {request.user}')

    if(type(request.user) != AnonymousUser):
        personagens = Personagem.objects.filter(jogador=user)
        personagens = list(personagens.values())
        
        if not personagens:
            personagens = 'Vazio'
    
    else:
        personagens = 'you must be logged in to see your campaigns'

    data = personagens
    return JsonResponse(data, safe=False)