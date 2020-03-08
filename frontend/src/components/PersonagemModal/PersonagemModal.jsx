import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FichaDestaque from './FichaDestaque/FichaDestaque';
import FichaAtributos from './FichaAtributos/FichaAtributos';
import FichaTesteResistencia from './FichaTesteResistencia/FichaTesteResistencia';
import FichaPericias from './FichaPericias/FichaPericias';
import FichaProficiencias from './FichaProficiencias/FichaProficiencias';
// STYLES
import './PersonagemModal.css'
const data = {
  img: "https://66.media.tumblr.com/50d79afb983692a4bd0f6edb17239d23/tumblr_papmsfljGX1r14dt9o2_250.png",
  nome: "Milliardo",
  classes: [
    { nome: 'Bruxo', nivel: '15' },
    { nome: 'Guerreiro', nivel: '5' }
  ],
  antecedente: 'Héroi Renegado',
  playerName: "Vitor",
  racaNome: 'Meio-Elfo',
  tendencia: 'CB',
  experiencia: 8000,
  atr_base: {
    for: 18,
    des: 14,
    con: 15,
    int: 10,
    sab: 12,
    car: 20
  },
  atr_mod: {
    for: 4,
    des: 2,
    con: 3,
    int: 0,
    sab: 1,
    car: 5
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
    car: 13
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
    armas: ['Simples', 'Marciais', 'Arcos']
  }
}

class PersonagemModal extends Component {
  state = {
    show: true,
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        dialogClassName="Modal90w"
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ficha de Personagem</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={
            {
              "backgroundImage": "url('https://img.docero.com.br/photo/l/ssces1.png')",
              "backgroundRepeat": "no-repear",
              "backgroundSize": "100%"
            }
          }

        >
          <Container>
            <Row>
              <Col>
                <FichaDestaque data={data} />
                <Row>
                  <Col style={{ marginLeft: "20px", marginRight: "50px" }}>
                    <Row>
                      <FichaAtributos data={data} />
                      <Col style={{ marginLeft: "8px" }}>
                        <Row style={{ height: "50px", marginTop: "8px", marginBottom: "10px", border: "3px solid orange" }}>
                          <Col md={3} className="AtributoMod">{data.inspiracao}</Col>
                          <Col><div className="AtributoNome">INSPIRAÇÂO</div></Col>
                        </Row>
                        <Row style={{ height: "50px", marginTop: "16px", border: "3px solid orange" }}>
                          <Col md={3} className="AtributoMod">{data.proficiencia}</Col>
                          <Col><div className="AtributoNome" style={{ fontSize: "10px" }}>BÔNUS DE PROFICIÊNCIA</div></Col>
                        </Row>
                        <Row style={{ height: "200px", marginTop: "20px", border: "3px solid orange" }}>
                          <FichaTesteResistencia data={data} />
                        </Row>
                        <Row style={{ height: "530px", marginTop: "20px", border: "3px solid orange" }}>
                          <FichaPericias data={data} />
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row style={{ height: "50px", marginTop: "8px", marginBottom: "10px", border: "3px solid orange" }}>
                          <Col md={2}>{data.pericia_val.percepcao + 10}</Col>
                          <Col><div className="AtributoNome">SABEDORIA PASSIVA</div></Col>
                        </Row>
                        <Row style={{ height: "290px", marginTop: "20px", border: "3px solid orange" }}>
                          <FichaProficiencias data={data} />
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col></Col>

                  <Col></Col>

                </Row>

              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

}

export default PersonagemModal;