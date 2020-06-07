import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PersonagemTab from './PersonagemTab/PersonagemTab';
import PersonagemInfo from './PersonagemInfo/PersonagemInfo';

import './PersonagemModal.scss';

const data = {
  img:
    'https://66.media.tumblr.com/50d79afb983692a4bd0f6edb17239d23/tumblr_papmsfljGX1r14dt9o2_250.png',
  nome: 'Milliardo',
  classes: [
    { nome: 'Bruxo', nivel: '15' },
    { nome: 'Guerreiro', nivel: '5' },
  ],
  antecedente: 'Héroi Renegado',
  alinhamento: 'Caotico Bom',
  playerName: 'Vitor',
  raca: { nome: 'Meio-Elfo' },
  tendencia: 'CB',
  experienciaAtual: 8000,
  experienciaProxNivel: 10000,
  atributoPontos: {
    forca: 18,
    destreza: 14,
    constituicao: 15,
    inteligencia: 10,
    sabedoria: 12,
    carisma: 20,
  },
  atributoModificadores: {
    forca: 4,
    destreza: 2,
    constituicao: 3,
    inteligencia: 0,
    sabedoria: 1,
    carisma: 5,
  },
  inspiracao: '0',
  proficiencia: '8',
  teste_de_resistencia: {
    forca: {
      proficiente: false,
      valor: 4,
    },
    destreza: {
      proficiente: false,
      valor: 2,
    },
    constituicao: {
      proficiente: false,
      valor: 3,
    },
    inteligencia: {
      proficiente: false,
      valor: 0,
    },
    sabedoria: {
      proficiente: true,
      valor: 9,
    },
    carisma: {
      proficiente: true,
      valor: 13,
    },
  },
  pericias: {
    acrobacia: {
      proficiente: false,
      valor: 2,
    },
    arcanismo: {
      proficiente: false,
      valor: 0,
    },
    atletismo: {
      proficiente: false,
      valor: 4,
    },
    atuacao: {
      proficiente: false,
      valor: 5,
    },
    blefar: {
      proficiente: false,
      valor: 5,
    },
    furtividade: {
      proficiente: false,
      valor: 2,
    },
    historia: {
      proficiente: false,
      valor: 0,
    },
    intimidacao: {
      proficiente: true,
      valor: 13,
    },
    intuicao: {
      proficiente: true,
      valor: 1,
    },
    investigacao: {
      proficiente: true,
      valor: 8,
    },
    adestrarAnimais: {
      proficiente: false,
      valor: 5,
    },
    medicina: {
      proficiente: false,
      valor: 1,
    },
    natureza: {
      proficiente: false,
      valor: 1,
    },
    percepcao: {
      proficiente: true,
      valor: 9,
    },
    persuasao: {
      proficiente: true,
      valor: 13,
    },
    prestidigitacao: {
      proficiente: true,
      valor: 10,
    },
    religiao: {
      proficiente: false,
      valor: 0,
    },
    sobrevivencia: {
      proficiente: true,
      valor: 9,
    },
  },
  lstProficiencias: {
    idiomas: ['Comum', 'Elfico', 'Goblin'],
    ferramentas: ['Ferramentas de Ferreiro', 'Ferramentas de Artesão'],
    armas: ['Simples', 'Marciais', 'Arcos'],
  },
  classDeArmadura: 18,
  iniciativa: 20,
  deslocamento: 10.5,
  pvMax: 200,
  pvAtual: 200,
  pvTemp: 0,
  dadosDeVidaTotal: [
    {
      classe: 'Bruxo',
      dado: 'D8',
      qtd: 15,
    },
    {
      classe: 'Guerreiro',
      dado: 'D10',
      qtd: 5,
    },
  ],
  dadosDeVidaAtual: [
    {
      classe: 'Bruxo',
      dado: 'D8',
      qtd: 13,
    },
    {
      classe: 'Guerreiro',
      dado: 'D10',
      qtd: 3,
    },
  ],
  testeContraMorte: {
    sucesso: 2,
    falhas: 1,
  },
  equipamento: {
    armas: [
      {
        tipo: 'Simples',
        nome: 'Adaga',
        dano: '1d4+2',
        acerto: '+10',
        tipoDano: 'perfurante',
        propriedades: 'Acuidade, leve, arremeço (distância 6/18)',
        alcance: '1.5m',
        peso: 0.5,
        preco: {
          pl: 0,
          po: 2,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        equipado: true,
        qtd: 2,
      },
      {
        tipo: 'Simples',
        nome: 'Besta leve',
        dano: '1d8+2',
        acerto: '+10',
        tipoDano: 'perfurante',
        propriedades: 'Munição (distância 24/96), recarga, duas mãos',
        alcance: 'Distância',
        peso: 2.5,
        preco: {
          pl: 0,
          po: 25,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        equipado: true,
        qtd: 1,
      },
    ],
    armaduras: [
      {
        nome: 'Couro Batido',
        tipo: 'Armadura Leve',
        classeDeArmadura: 12,
        propriedades: 'Modificador de destreza',
        forcaMinima: 0,
        furtividade: null,
        peso: 6.5,
        preco: {
          pl: 0,
          po: 25,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        equipado: true,
        qtd: 1,
      },
    ],
    itens: [
      {
        nome: 'Mochila',
        preco: {
          pl: 0,
          po: 2,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        peso: 2.5,
        qtd: 1,
      },
      {
        nome: 'Livro de estudo',
        preco: {
          pl: 0,
          po: 25,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        peso: 2.5,
        qtd: 1,
      },
      {
        nome: 'Tinta (frasco de 30ml)',
        preco: {
          pl: 0,
          po: 10,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        peso: 0,
        qtd: 1,
      },
      {
        nome: 'Caneta tinteiro',
        preco: {
          pl: 0,
          po: 25,
          pe: 0,
          pp: 0,
          pc: 2,
        },
        peso: 0,
        qtd: 1,
      },
      {
        nome: 'Folha de Pergaminho',
        preco: {
          pl: 0,
          po: 0,
          pe: 0,
          pp: 1,
          pc: 0,
        },
        peso: 0,
        qtd: 10,
      },
      {
        nome: 'Saquinho de areia',
        preco: {
          pl: 0,
          po: 25,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        peso: 2.5,
        qtd: 1,
      },
      {
        nome: 'Pequena faca',
        preco: {
          pl: 0,
          po: 0,
          pe: 0,
          pp: 0,
          pc: 0,
        },
        peso: 0,
        qtd: 1,
      },
    ],
  },
  acoes: { // TODO refazer essa parte
    acoes: {
      ataques: [
        {
          nome: 'Adaga',
          dano: '1d4+2',
          acerto: '+10',
          tipoDano: 'perfurante',
          propriedades: 'Acuidade, leve, arremeço (distância 6/18)',
          alcance: ['1.5'],
        },
        {
          nome: 'Besta leve',
          dano: '1d8+2',
          acerto: '+10',
          tipoDano: 'perfurante',
          propriedades: 'Munição (distância 24/96), recarga, duas mãos',
          alcance: ['24', '96'],
        },
        {
          nome: 'Machado de Batalha',
          dano: '1d10+2',
          acerto: '+10',
          tipoDano: 'perfurante',
          propriedades: 'Munição (distância 24/96), recarga, duas mãos',
          alcance: ['180', '180'],
        }
      ],
      habilidades: [
        {nome: 'Criar arma do pacto', descricao: 'Como uma ação, você cria uma arma de pacto em sua mão vazia (você escolhe a forma e é proficiente com ela enquanto a empunhar, e ela conta como sendo magica) Você pode transformar uma arma magica em sa arma de pacto realizando um ritual especial.'},
        {nome: 'Interagir com objeto', descricao: 'Interagir com objeto'}
      ],
      magias: [
        {
          nome: 'Toque Chocante',
          alcance: ['1.5'],
          acerto: '+7',
          dano: '1d8',
          tipoDano: 'elétrico',
          propriedades: '(distancia 1.5m)'
        },
        {
          nome: 'Toque Arrepiante',
          alcance: ['20'],
          acerto: '+7',
          dano: '4d8',
          tipoDano: 'necrótico',
          propriedades: 'Quadrado 5/5m'
        }
      ]
    },
    acoesBonus: {
      ataques: [
        {
          nome: 'Ataque desarmado',
          dano: '1d4+2',
          acerto: '+10',
          tipoDano: 'concussão',
          propriedades: '',
          alcance: ['1.5']
        }
      ],
      habilidades: [
        {nome: 'Rajada de Golpes', descricao: 'Depois de realizar um atque bem sucedido no seu turno você pode gastar um 1 ponto de ki para realizar dois ataques desarmados com uma ação bonus'},
      ],
      magias: [
        {
          nome: 'Bruxaria',
          alcance: ['18'],
          acerto: 'SAB 16',
          dano: '',
          tipoDano: 'Amaldiçoado',
          propriedades: 'Quadrado 5/5m'
        }
      ]
    },
    reacoes: { ataques: [], habilidades: [] },
    outros: {
      habilidades: [],
    },
  },
  magias: [
    {
      nome: 'Bruxaria',
      preparada: true,
      nivel: '1',
      escola: 'Evocação',
      tempoConjuracao: 'BA',
      alcance: '18 metros',
      componentes: 'V S M (olho petrificado de tritão',
      duracao: 'Concentração, até 1 hora',
      descricao:
        'Você coloca uma maldição em uma criatura que você possa ver, dentro do alcance. Até a magia acabar, você causa 1d6 de dano necrótico extra no alvo sempre que atingi-lo com um ataque. Além disso, escolha uma habilidade quando você conjurar a magia. O alvo tem desvantagem em testes de habilidade feitos com a habilidade escolhida.\nSe o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, no seu turno subsequente para amaldiçoar outra criatura.\nUma magia remover maldição conjurada no alvo acaba com a magia prematuramente.\nEm Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.',
    },
    {
      nome: 'Toque Chocante',
      nivel: 'Truque',
      escola: 'Evocação',
      tempoConjuracao: 'A',
      alcance: 'Toque',
      componentes: 'V S',
      duracao: 'instantâneo',
      descricao:
        'Eletricidade surge da sua mão para transmitir um choque em uma criatura que você tentar tocar. Faça um ataque corpo-a-corpo com magia contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano elétrico e não pode usar reações até o início do próximo turno dele.\nO dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).',
    },
  ],
};

class PersonagemModal extends Component {
  state = {
    show: true,
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        dialogClassName="Modal90w"
        onHide={this.handleClose}
      >
        <Modal.Header className="Marginado" closeButton>
          <Modal.Title>{data.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Marginado background">
          <Container>
            <PersonagemInfo className="alinhamento-cb" data={data}/>
            <Row style={{ 'margin-top': '15px' }}>
              <Col>
                <PersonagemTab data={data}/>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PersonagemModal;
