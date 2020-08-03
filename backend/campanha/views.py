from django.http import JsonResponse
from .models.campanha import Campanha
from django.contrib.auth.models import User, AnonymousUser


def get_campanhas(request):
    campanhas = [
        {
            'titulo': 'Teste1',
            'mestre': 'Vitor',
            'n_players': 2,
            'player': [
                {
                    'nome': 'x',
                    'nivel': 2,
                    'classes': [
                        'lvl xx',
                        'lvl xy'
                    ] 
                },
                {
                    'nome': 'y',
                    'nivel': 3,
                    'classes': [
                        'lvl xx',
                        'lvl xy',
                        'lvl yy'
                    ] 
                }
            ]
        }
    ]

    qtd = User.objects.count()
    user = User.objects.first()
    print(f'User {request.user}')

    if(type(request.user) != AnonymousUser):
        #campanhas = Campanha.objects.filter(mestre=user)
        if campanhas:
            campanhas = campanhas
        else:
            campanhas = 'Vazio'
    else:
        campanhas = 'you must be logged in to see your campaigns'
    return JsonResponse({"campanhas": campanhas})