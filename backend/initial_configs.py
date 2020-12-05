from campanha.models.campanha import Campanha
from campanha.models.raca import Raca, Traco
from campanha.models.classe import Classe, CaracteristicasClasse


def set_srd(campanha_id):
    campanha = Campanha.objects.get(id=campanha_id)
    print(f'Analisando raças SRD para {campanha.titulo}')
    # anao
    if not Raca.objects.filter(campanha=campanha, nome='Anão').count() > 0:
        print('---- Criando raca anão')
        anao = Raca()
        anao.campanha = campanha
        anao.nome = 'Anão'
        anao.bonus_con = 2
        anao.save()

        anao.adicionar_traco(nome="Aumento no Valor de Habilidade", descricao="O valor deConstituição aumenta em 2.")

        anao.adicionar_traco(
            nome="Idade",
            descricao="Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até "
                      "atingirem a idade de 50 anos. Em média, eles vivem 350 anos. "
        )

        anao.adicionar_traco(
            nome="Tendência",
            descricao="A maioria dos anões é leal, pois acreditam firmemente nos benefícios de uma "
                      "sociedade bem organizada. Eles tendem para o bem, com um forte senso de "
                      "honestidade e uma crença de que todos merecem compartilhar os benefícios de "
                      "uma ordem social justa."
        )

        anao.adicionar_traco(
            nome="Tamanho",
            descricao="Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 kg. Seu tamanho é Médio."
        )

        anao.adicionar_traco(
            nome="Deslocamento",
            descricao="Anões possuem deslocamento base de caminhada de 7,5 metros. O deslocamento não é reduzido "
                      "quando estiver usando armadura pesada."
        )

        anao.adicionar_traco(
            nome="Visão no Escuro",
            descricao="Acostumado à vida subterrânea, anões tem uma visão superior no escuro e na penumbra. Anões "
                      "enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na "
                      "penumbra. Anões não pode discernir cores no escuro, apenas tons de cinza.")

        anao.adicionar_traco(
            nome="Resiliência Anã",
            descricao="Anões possuem vantagem em testes de resistência contra venenos e resistência contra dano de "
                      "veneno (explicado no capítulo 9)."
        )

        anao.adicionar_traco(
            nome="Treinamento Anão em Combate",
            descricao="Anões tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de "
                      "guerra."
        )

        anao.adicionar_traco(
            nome="Proficiência com Ferramentas",
            descricao="Anões tem proficiência em uma ferramenta de artesão à sua escolha entre ferramentas de "
                      "ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro."
        )

        anao.adicionar_traco(
            nome="Especialização em Rochas",
            descricao="Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um "
                      "trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do "
                      "seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal."
        )

        anao.adicionar_traco(
            nome="Idiomas",
            descricao="Anões podem falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e "
                      "sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o "
                      "anão falar."
        )

        # elfo
    if not Raca.objects.filter(campanha=campanha, nome='Elfo').count() > 0:
        print('---- Criando raca elfo')
        elfo = Raca()
        elfo.campanha = campanha
        elfo.nome = 'Elfo'
        elfo.bonus_des = 2
        elfo.save()

        elfo.adicionar_traco(
            nome='Aumento no valor de Habilidade',
            descricao='Seu valor de destreza foi aumentado em 2'
        )

        elfo.adicionar_traco(
            nome='Idade',
            descricao='Embora os elfos atinjam a maturidade física com praticamente a mesma idade dos humanos, '
                      'a compreensão elfica de idade adulta vai além da maturidade fisica, abrangendo sua experiência '
                      'sobre o mundo. Um elfo tipicamente assume a idade adulta e um nome adulto com cerca de 100 '
                      'anos de idade e pode viver 750 anos. '
        )

        elfo.adicionar_traco(
            nome='Tendência',
            descricao='Elfos amam a liberdade, a diversodade e a expressão '
                      'pessoal, então eles inclinam-se forte e suavemente para '
                      'aspectos do caos. Eles valorizam e protegem a liverdade dos '
                      'outros como a sua própria, e são geralmente mais bondosos '
                      'que o contrário. Os drow são excessão. Seu exílio no '
                      'Subterrâneo fez deles perversos e perigosos. Drow são '
                      'geralmente mais maus que o contrário.'
        )
        elfo.adicionar_traco(
            nome='Tamanho',
            descricao='Elfos medem entre 1,50 a 1,80 metros de altura e possuem '
                      'constituição delgada. Seu tamanho é médio.'
        )
        elfo.adicionar_traco(
            nome='Deslocamento',
            descricao='Seus deslocamento base de caminhada é 9 metros.'
        )
        elfo.adicionar_traco(
            nome='Visão no Escuro',
            descricao='Acostumados às florestas crepusculares e ao céu '
                      'noturno, elfos possuiem uma visão superior em '
                      'condições de escuridão e na penumbra. Elfos podem '
                      'enxergar na penumbra até 18 metros como se fosse luz '
                      'plena, e no escuro como se fosse na penumbra. Elfos '
                      'não podem discernir cores no escuro, apenas tons de '
                      'cinza.'
        )
        elfo.adicionar_traco(
            nome='Sentidos Aguçados',
            descricao='Elfos tem proficiência na perícia Percepção'
        )
        elfo.adicionar_traco(
            nome='Ancestral Feérico',
            descricao='Elfos tem vantagem nos testes de resistencia para '
                      'resistir a ser enfeitiçado e magias não podem '
                      'colocá-lo para dormir.'
        )
        elfo.adicionar_traco(
            nome='Transe',
            descricao='Elfos não precisam dormir. Ao invés disso, eles meditam '
                      'profundamente, permanecendo semiconscientes, durante 4 horas '
                      'por dia. Enquanto medita, um elfo é capaz de sonhar de certo '
                      'modo. Esses sonhos na verdade são exercicios mentais que se '
                      'tornam reflexos através de anos de prática. Depois de '
                      'descansar dessa forma, elfos fanham os mesmo beneficios que um '
                      'humano depois de  horas de sono.'
        )
        elfo.adicionar_traco(
            nome='Idiomas',
            descricao='Elfos podem falar, ler e escrever Comum e Élfico. O Élfico é '
                      'um idioma fluido, com entonações sutis e gramatica complexa. '
                      'A literatura elfica é rica e diversa, e suas canções e poemas '
                      'são famosos entre outras raças. Muitos bardos aprendem essa '
                      'língua para que possam adicionar canções élficas ao seu '
                      'repertório.'
        )

        # halfling
    if not Raca.objects.filter(campanha=campanha, nome='Halfling').count() > 0:
        print('---- Criando raca halfling')
        halfling = Raca()
        halfling.campanha = campanha
        halfling.nome = 'Halfling'
        halfling.bonus_des = 2
        halfling.save()

        halfling.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Destreza aumenta em 2.'
        )

        halfling.adicionar_traco(
            nome='Idade',
            descricao='Um halfling atinge a idade adulta aos 20 anos e pode chegar a 150 anos.'
        )

        halfling.adicionar_traco(
            nome='Tendência',
            descricao='A maioria dos halflings é leal e boa. Via de regra, eles possuem um bom coração e são amáveis, '
                      'odeiam ver o sofrimento dos outros e não toleram a opressão. Eles também são muito ordeiros e '
                      'tradicionais, fortemente apegados à sua comunidade e ao conforto de suas antigas tradições. '
        )

        halfling.adicionar_traco(
            nome='Tamanho',
            descricao='Halflings medem cerca de 0,90 metro de altura e pesam aproximadamente 20 kg. Seu tamanho é '
                      'Pequeno. '
        )

        halfling.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 7,5 metros.'
        )

        halfling.adicionar_traco(
            nome='Sortudo',
            descricao='Quando você obtiver um 1 natural em uma jogada de ataque, teste de habilidade ou teste de '
                      'resistência, você pode jogar de novo o dado e deve utilizar o novo resultado. '
        )

        halfling.adicionar_traco(
            nome='Bravura',
            descricao='Você tem vantagem em testes de resistência contra ficar amedrontado.'
        )

        halfling.adicionar_traco(
            nome='Agilidade Halfling',
            descricao='Você pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.'
        )

        halfling.adicionar_traco(
            nome='Idiomas',
            descricao='Você pode falar, ler e escrever Comum e Halfling. A linguagem Halfling não é secreta, '
                      'mas os halflings são relutantes em compartilhá-la com os outros. Eles escrevem muito pouco, '
                      'por isso eles não possuem uma literatura rica. No entanto, sua tradição oral é muito forte. '
                      'Quase todos os halflings falam o idioma Comum para conversar com as pessoas das terras que '
                      'habitam, ou através das quais eles estejam viajando. '
        )
    if not Raca.objects.filter(campanha=campanha, nome='Humano').count() > 0:
        print('---- Criando raca humano')
        humano = Raca()
        humano.campanha = campanha
        humano.nome = 'Humano'
        humano.bonus_for = 1
        humano.bonus_des = 1
        humano.bonus_con = 1
        humano.bonus_int = 1
        humano.bonus_sab = 1
        humano.bonus_car = 1
        humano.save()

        humano.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Todos os seus valores de habilidade aumentam em 1.'
        )

        humano.adicionar_traco(
            nome='Idade',
            descricao='Os humanos chegam à idade adulta no final da adolescência e vivem menos de um século.'
        )

        humano.adicionar_traco(
            nome='Tendência',
            descricao='Os humanos não possuem inclinação a nenhuma tendência em especial. Os melhores e os piores são '
                      'encontrados entre eles. '
        )

        humano.adicionar_traco(
            nome='Tamanho',
            descricao='Os humanos variam muito em altura e peso, podem ter quase 1,50 metro ou mais de 1,80 metro. '
                      'Independentemente da sua posição entre esses valores, o seu tamanho é Médio. '
        )

        humano.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 9 metros.'
        )

        humano.adicionar_traco(
            nome='Idiomas',
            descricao='Você pode falar, ler e escrever Comum e outro idioma adicional, à sua escolha. Os humanos '
                      'normalmente aprendem os idiomas dos povos que convivem, incluindo dialetos obscuros. Eles '
                      'gostam de rechear seu discurso com palavras emprestadas de outras línguas: xingamentos orcs, '
                      'expressões musicais élficas, frases militares anãs e outros. '
        )
    if not Raca.objects.filter(campanha=campanha, nome='Draconato').count() > 0:
        print('---- Criando raca draconato')
        draconato = Raca()
        draconato.campanha = campanha
        draconato.nome = 'Draconato'
        draconato.bonus_for = 2
        draconato.bonus_car = 1
        draconato.save()

        draconato.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Força aumenta em 2 e seu valor de Carisma aumenta em 1.'
        )

        draconato.adicionar_traco(
            nome='Idade',
            descricao='Draconatos jovens crescem rapidamente. Eles caminham horas após nascerem, adquirindo o tamanho '
                      'e desenvolvimento semelhante a de uma criança humana de 10 anos com 3 anos de idade e alcançam '
                      'a maturidade aos 15. Eles costumam viver até os 80. '
        )

        draconato.adicionar_traco(
            nome='Tendência',
            descricao='Os draconatos tendem aos extremos, realizando uma escolha consciente de um lado ou do outro da '
                      'guerra cósmica entre o bem e o mal (representada por Bahamut e Tiamat, respectivamente). A '
                      'maioria dos draconatos é boa, mas os que vão para o lado de Tiamat podem se tornar vilões '
                      'terríveis. '
        )

        draconato.adicionar_traco(
            nome='Tamanho',
            descricao='Os draconatos são mais altos e mais pesados que os humanos, geralmente possuindo mais de 1,'
                      '80 metro e normalmente pesando mais de 125 kg. Seu tamanho é Médio. '
        )

        draconato.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 9 metros.'
        )

        draconato.adicionar_traco(
            nome='Ancestral Dracônico',
            descricao='Você possui um ancestral dracônico. Escolha um tipo de dragão da tabela Ancestral Dracônico. '
                      'Sua arma de sopro e resistência a dano são determinadas pelo tipo de dragão, como mostrado na '
                      'tabela. '
        )

        draconato.adicionar_traco(
            nome='Arma de Sopro',
            descricao='Você pode usar uma ação para exalar energia destrutiva. Seu ancestral dracônico determina o '
                      'tamanho, formado e tipo de dano que você expele. Quando você usa sua arma de sopro, '
                      'cada criatura na área exalada deve realizar um teste de resistência, o tipo do teste é '
                      'determinado pelo seu ancestral dracônico. A CD do teste de resistência é 8 + seu modificador '
                      'de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano num fracasso e '
                      'metade desse dano num sucesso. O dano aumenta para 3d6 no 6° nível, 4d6 no 11° nível e 5d6 no '
                      '16° nível. Depois de usar sua arma de sopro, você não poderá utilizá-la novamente até '
                      'completar um descanso curto ou longo. '
        )

        draconato.adicionar_traco(
            nome='Resistência a Dano',
            descricao='Você possui resistência ao tipo de dano associado ao seu ancestral dracônico.'
        )

        draconato.adicionar_traco(
            nome='Idiomas',
            descricao='Você pode falar, ler e escrever Comum e Dracônico. O idioma Dracônico é conhecido por ser uma '
                      'das mais antigas línguas e ainda é usado no estudo de magia. A linguagem soa áspera para a '
                      'maioria das criaturas, incluindo várias consoantes e silabas firmes. '
        )
    if not Raca.objects.filter(campanha=campanha, nome='Gnomo').count() > 0:
        print('---- Criando raca gnomo')
        gnomo = Raca()
        gnomo.campanha = campanha
        gnomo.nome = 'Gnomo'
        gnomo.bonus_int = 2
        gnomo.save()

        halfling.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Inteligência aumenta em 2.'
        )

        halfling.adicionar_traco(
            nome='Idade',
            descricao='Gnomos amadurecem a mesma proporção que os humanos e, a maioria, atinge a idade adulta por '
                      'volta dos 40 anos. Eles podem viver entre 350 e 500 anos. '
        )

        halfling.adicionar_traco(
            nome='Tendência',
            descricao='Os gnomos geralmente são bons. Os que tendem para a ordem são sábios, engenheiros, '
                      'pesquisadores, escolásticos, investigadores ou inventores. Os que tendem ao caos são '
                      'menestréis, engenhoqueiros, andarilhos ou joalheiros caprichosos. Gnomos são bons de coração '
                      'e, até mesmo os trapaceiros entre eles tendem a ser mais brincalhões que perversos. '
        )

        halfling.adicionar_traco(
            nome='Tamanho',
            descricao='Os gnomos tem entre 0,90 e 1,20 metro e seu peso médio é de 20 kg. Seu tamanho é Pequeno.'
        )

        halfling.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 7,5 metros.'
        )

        halfling.adicionar_traco(
            nome='Visão no Escuro',
            descricao='Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você '
                      'enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na '
                      'penumbra. Você não pode discernir cores no escuro, apenas tons de cinza. '
        )

        halfling.adicionar_traco(
            nome='Esperteza Gnômica',
            descricao='Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma '
                      'contra magia. '
        )

        halfling.adicionar_traco(
            nome='Idiomas',
            descricao='Você sabe falar, ler e escrever Comum e Gnômico. A linguagem Gnômica, que usa o alfabeto Anão, '
                      'é conhecida por suas técnicas de dissertação e por seus catálogos de conhecimento sobre o '
                      'mundo natural. '
        )
    if not Raca.objects.filter(campanha=campanha, nome='Meio-Elfo').count() > 0:
        print('---- Criando raca meio-elfo')
        meio_elfo = Raca()
        meio_elfo.campanha = campanha
        meio_elfo.nome = 'Meio-Elfo'
        meio_elfo.bonus_car = 2
        meio_elfo.save()

        meio_elfo.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Carisma aumenta em 2 e outros dois valores de habilidade, à sua escolha, '
                      'aumentam em 1. '
        )

        meio_elfo.adicionar_traco(
            nome='Idade',
            descricao='Meio-elfos atingem a maturidade ao mesmo tempo que os humanos atingem a idade adulta, '
                      'por volta dos 20 anos. Eles vivem muito mais que os humanos, no entanto, raramente ultrapassam '
                      'os 180 anos. '
        )

        meio_elfo.adicionar_traco(
            nome='Tendência',
            descricao='Meio-elfos compartilham a veia caótica da sua herança élfica. Eles valorizam tanto a sua '
                      'liberdade quanto sua expressão criativa, não demonstrando qualquer apresso por líderes ou '
                      'seguidores. Eles se irritam com regras, ressentindo com exigências de outros e, as vezes, '
                      'se provam incertos, ou pelo menos, imprevisíveis. '
        )

        meio_elfo.adicionar_traco(
            nome='Tamanho',
            descricao='Meio-elfos tem aproximadamente a mesma altura dos humanos, variando entre 1,50 metro e 1,'
                      '80 metro. Seu tamanho é Médio. '
        )

        meio_elfo.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 9 metros.'
        )

        meio_elfo.adicionar_traco(
            nome='Visão no Escuro',
            descricao='Graças ao seu sangue élfico, você tem uma visão superior no escuro e na penumbra. Você enxerga '
                      'na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. '
                      'Você não pode discernir cores no escuro, apenas tons de cinza. '
        )

        meio_elfo.adicionar_traco(
            nome='Ancestral Feérico',
            descricao='Você possui vantagem em testes de resistência contra encantamento e magia não pode colocar '
                      'você pra dormir. '
        )

        meio_elfo.adicionar_traco(
            nome='Versatilidade em Perícia',
            descricao='Você ganha proficiência em duas perícias, à sua escolha.'
        )

        meio_elfo.adicionar_traco(
            nome='Idiomas',
            descricao='Você sabe falar, ler e escrever Comum, Élfico e um idioma adicional, à sua escolha.'
        )
    if not Raca.objects.filter(campanha=campanha, nome='Meio-Orc').count() > 0:
        print('---- Criando raca meio-orc')
        meio_orc = Raca()
        meio_orc.campanha = campanha
        meio_orc.nome = 'Meio-Orc'
        meio_orc.bonus_for = 2
        meio_orc.bonus_con = 1
        meio_orc.save()

        meio_orc.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.'
        )

        meio_orc.adicionar_traco(
            nome='Idade',
            descricao='Os meio-orcs amadurecem um pouco antes dos humanos, atingindo a idade adulta aos 14 anos. Eles '
                      'envelhecem notavelmente mais rápido e, raramente, vivem mais de 75 anos. '
        )

        meio_orc.adicionar_traco(
            nome='Tendência',
            descricao='Meio-orcs tem uma tendência inata ao caos devido aos seus parentes orcs e não são fortemente '
                      'inclinados ao bem. Meio-orcs que cresceram entre orcs e desejam viver e estão dispostos a '
                      'passar sua vida entre eles, tendem a ser malignos. '
        )

        meio_orc.adicionar_traco(
            nome='Tamanho',
            descricao='Meio-orcs são de certa forma maiores e mais largos que os humanos, medindo entre 1,80 metro e '
                      '2,10 metros. Seu tamanho é Médio. '
        )

        meio_orc.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 9 metros.'
        )

        meio_orc.adicionar_traco(
            nome='Visão no Escuro',
            descricao='Graças ao seu sangue orc, você tem uma visão superior no escuro e na penumbra. Você enxerga na '
                      'penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você '
                      'não pode discernir cores no escuro, apenas tons de cinza. '
        )

        meio_orc.adicionar_traco(
            nome='Ameaçador',
            descricao='Você adquire proficiência na perícia Intimidação.'
        )

        meio_orc.adicionar_traco(
            nome='Resistência Implacável',
            descricao='Quando você é reduzido a 0 pontos de vida mas não é completamente morto, você pode voltar para '
                      '1 ponto de vida. Você não pode usar essa característica novamente até completar um descanso '
                      'longo. '
        )

        meio_orc.adicionar_traco(
            nome='Ataques Selvagens',
            descricao='Quando você atinge um ataque crítico com uma arma corpo-a-corpo, você pode rolar um dos dados '
                      'de dano da arma mais uma vez e adicioná-lo ao dano extra causado pelo acerto crítico. '
        )

        meio_orc.adicionar_traco(
            nome='Idiomas',
            descricao='Você sabe falar, ler e escrever Comum, Orc. O Orc é um idioma ríspido, possuindo uma linguagem '
                      'de consoantes duras. Ele não possui alfabeto próprio, mas usa o alfabeto Anão. '
        )
    if not Raca.objects.filter(campanha=campanha, nome='Tiefling').count() > 0:
        print('---- Criando raca Tiefling')
        tiefling = Raca()
        tiefling.campanha = campanha
        tiefling.nome = 'Tiefling'
        tiefling.bonus_car = 2
        tiefling.bonus_int = 1
        tiefling.save()

        tiefling.adicionar_traco(
            nome='Aumento no Valor de Habilidade',
            descricao='Seu valor de Inteligência aumenta em 1 e seu valor de Carisma aumenta em 2.'
        )

        tiefling.adicionar_traco(
            nome='Idade',
            descricao='Os tieflings amadurecem ao mesmo tempo que os humanos, mas vivem alguns anos a mais.'
        )

        tiefling.adicionar_traco(
            nome='Tendência',
            descricao='Tieflings não possuem uma tendência inata ao mal, mas muitos acabam por abraçá-lo. Maligno ou '
                      'não, uma natureza independente inclina a maioria dos tieflings ao alinhamento caótico. '
        )

        tiefling.adicionar_traco(
            nome='Tamanho',
            descricao='Os tieflings possuem o mesmo tamanho e compleição dos humanos. Seu tamanho é Médio.'
        )

        tiefling.adicionar_traco(
            nome='Deslocamento',
            descricao='Seu deslocamento base de caminhada é 9 metros.'
        )

        tiefling.adicionar_traco(
            nome='Visão no Escuro',
            descricao='Graças a sua herança infernal, você tem uma visão superior no escuro e na penumbra. Você '
                      'enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na '
                      'penumbra. Você não pode discernir cores no escuro, apenas tons de cinza. '
        )

        tiefling.adicionar_traco(
            nome='Resistência Infernal',
            descricao='Você possui resistência a dano de fogo.'
        )

        tiefling.adicionar_traco(
            nome='Legado Infernal',
            descricao='Você conhece o truque taumaturgia. Quando você atingir o 3° nível, você poderá conjurar a '
                      'magia repreensão infernal uma vez por dia como uma magia de 2° nível. Quando você atingir o 5° '
                      'nível, você também poderá conjurar a magia escuridão. Você precisa terminar um descanso longo '
                      'para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas '
                      'magias é Carisma. '
        )

        tiefling.adicionar_traco(
            nome='Idiomas',
            descricao='Você sabe falar, ler e escrever Comum e Infernal.'
        )

    print(f'Analisando classes SRD para {campanha.titulo}')
    # barbaro
    if not Classe.objects.filter(campanha=campanha, nome='Barbaro').count() > 0:
        print('---- criando classe barbaro')
        barbaro = Classe()
        barbaro.nome = 'Barbaro'
        barbaro.campanha = campanha
        barbaro.proficiencias = ['ArdrL', 'Ardrl', 'Escud', 'ArmaS', 'ArmaM']
        barbaro.pericias = ['ADE', 'ATL', 'ITM', 'NAT', 'PER', 'SOB']
        barbaro.teste_resistencia = ['FOR', 'CON']
        barbaro.save()

        barbaro.adicionar_caracteristica(
            nivel=1,
            titulo='Furia',
            descricao='Em batalha, você luta com uma ferocidade primitiva. No seu turno, você pode entrar em fúria '
                      'com uma ação bônus\nEnquanto estiver em fúria, você recebe os seguintes benefícios se você não '
                      'estiver vestindo uma armadura pesada:\n\tVocê tem vantagem em testes de Força e testes de '
                      'resistência de Força\n\tQuando você desferir um ataque com arma corpo-a-corpo usando Força, '
                      'você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire níveis de '
                      'bárbaro, como mostrado na coluna Dano de Fúria na tabela O Bárbaro\n\tVocê possui resistência '
                      'contra dano de concussão, cortante e perfurante.\nSe você for capaz de conjurar magias, '
                      'você não poderá conjura-las ou se concentrar nelas enquanto estiver em fúria\nSua fúria dura '
                      'por 1 minuto. Ela termina prematuramente se você cair inconsciente ou se seu turno acabar e '
                      'você não estiver atacando nenhuma criatura hostil desde seu último turno ou tiver sofrido dano '
                      'nesse período. Você também pode terminar sua fúria no seu turno com uma ação bônus.\nQuando '
                      'você tiver usado a quantidade de fúrias mostrada para o seu nível de bárbaro na coluna Fúrias '
                      'da tabela O Bárbaro, você precisará terminar um descanso longo antes de poder entrar em fúria '
                      'novamente.'
        )

        barbaro.adicionar_caracteristica(
            nivel=1,
            titulo='Defesa sem Armadura',
            descricao='Quando você não estiver vestindo qualquer armadura sua Classe de Armadura será 10 + seu '
                      'modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e '
                      'continuar a receber esse benefício '
        )

    # bardo
    if not Classe.objects.filter(campanha=campanha, nome='Bardo').count() > 0:
        print('---- criando a classe bardo')
        barbaro = Classe()
        barbaro.nome = 'Bardo'
        barbaro.campanha = campanha
        barbaro.proficiencias = ['ArdrL', 'Ardrl', 'Escud', 'ArmaS', 'ArmaM']
        barbaro.pericias = ['ADE', 'ATL', 'ITM', 'NAT', 'PER', 'SOB']
        barbaro.teste_resistencia = ['FOR', 'CON']
        barbaro.save()
    # bruxo
    # clerigo
    # druida
    # feiticeiro
    # guerreiro
    # ladino
    # mago
    # monge
    # paladino
    # patrulheiro
