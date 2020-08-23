from campanha.models.campanha import Campanha
from campanha.models.raca import Raca, Traco
from campanha.models.classe import Classe, CaracteristicasClasse


def set_srd(campanha_id):
    campanha = Campanha.objects.get(id=campanha_id)

    # anao
    if not Raca.objects.filter(campanha=campanha, nome='Anão').count() > 0:
        print('Criando raca anão')
        anao = Raca()
        anao.campanha = campanha
        anao.nome = 'Anão'
        anao.bonus_con = 2
        anao.save()

        traco = Traco()
        traco.nome = "Aumento no Valor de Habilidade"
        traco.descricao = "Seu valor deConstituição aumenta em 2."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Idade"
        traco.descricao = "Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem 350 anos."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Tendência"
        traco.descricao = "A maioria dos anões é leal, pois acreditam firmemente nos benefícios de uma sociedade bem organizada. Eles tendem para o bem, com um forte senso de honestidade e uma crença de que todos merecem compartilhar os benefícios de uma ordem social justa."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Tamanho"
        traco.descricao = "Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 kg. Seu tamanho é Médio."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Deslocamento"
        traco.descricao = "Seu deslocamento base de caminhada é de 7,5 metros. Seu deslocamento não é reduzido quando estiver usando armadura pesada."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Visão no Escuro"
        traco.descricao = "Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Resiliência Anã"
        traco.descricao = "Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno (explicado no capítulo 9)."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Treinamento Anão em Combate"
        traco.descricao = "Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Proficiência com Ferramentas: Você tem proficiência em uma ferramenta de artesão à sua escolha entre"
        traco.descricao = "ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Especialização em Rochas"
        traco.descricao = "Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()

        traco = Traco()
        traco.nome = "Idiomas"
        traco.descricao = "Você pode falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o anão falar."
        traco.campanha = campanha
        traco.raca = anao
        traco.save()
    # elfo
    # halfling
    # humano
    # draconato
    # gnomo
    # meio-elfo
    # meio-orc
    # tiefling

    if not Classe.objects.filter(campanha=campanha, nome='Anão').count() > 0:
        print('Criando classe Guerreiro')

        classe = Classe()
        classe.nome = 'Guerreiro'
        classe.campanha = campanha
        classe.proficiencias = ['ArdrL', 'ArdrM', 'ArdrP', 'ArmaS', 'ArmaM']
        classe.teste_resistencia = ['FOR', 'CON']
        classe.save()

        classe.adicionar_caracteristica(1, 'Estilo de luta: Duelismo', 'Quando você empunhar uma arma de ataque corpo-a-corpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma')
