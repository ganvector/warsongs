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
  teste_res: {
    for: false,
    des: false,
    con: false,
    int: false,
    sab: true,
    car: true,
  },
  teste_res_val: {
    for: 4,
    des: 2,
    con: 3,
    int: 0,
    sab: 9,
    car: 13,
  },
  pericia_prof: {
    acrobacia: false,
    arcanismo: false,
    atletismo: false,
    atuacao: false,
    blefar: false,
    furtividade: false,
    historia: false,
    intimidacao: true,
    intuicao: false,
    investigacao: true,
    lidarComAnimais: false,
    medicina: false,
    natureza: false,
    percepcao: true,
    persuasao: true,
    prestidigitacao: true,
    religiao: false,
    sobrevivencia: true,
  },

  pericia_val: {
    acrobacia: 2,
    arcanismo: 0,
    atletismo: 4,
    atuacao: 5,
    blefar: 5,
    furtividade: 2,
    historia: 0,
    intimidacao: 13,
    intuicao: 1,
    investigacao: 8,
    lidarComAnimais: 5,
    medicina: 1,
    natureza: 1,
    percepcao: 9,
    persuasao: 13,
    prestidigitacao: 10,
    religiao: 0,
    sobrevivencia: 9,
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
    falhas: 2,
  },
  ataques: [
    {
      nome: 'Adaga',
      alcance: { tipo: 'corpo a corpo' },
      propriedades: {
        municao: false,
        alcance: 'Corpo a corpo',
        tipo: 'Uma mão',
      },
      acerto: '+4',
      dano: '1d4+2 Cortante',
    },
    {
      nome: 'Besta Leve',
      propriedades: {
        municao: 19,
        alcance: 'Distância (24/96m)',
        tipo: 'Duas Mãos',
      },
      acerto: '+4',
      dano: '1d8+2 Perfurante',
    },
  ],
  magias: [
    {
      nome: 'Bruxaria',
      preparada: true,
      nivel: '1',
      escola: 'Evocação',
      tempoConjuracao: '1 ação bonus',
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
      tempoConjuracao: '1 ação',
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
        <Modal.Header closeButton>
          <Modal.Title>{data.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <PersonagemInfo data={data} />
            <Row style={{ 'margin-top': '15px' }}>
              <Col>
                <PersonagemTab data={data} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PersonagemModal;
