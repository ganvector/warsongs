import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

import BarraDeVida from './BarraDeVida/BarraDeVida';
import BarraDeExperiencia from './BarraDeExperiencia/BarraDeExperiencia';

const personagemInfo = (props) => (
  <Row>
    <Col>
      <Media>
        <img
          width={182}
          height={182}
          className="mr-3"
          src={props.data.img}
          alt="Imagem do Personagem"
        />
        <Media.Body>
          <Row>
            <Col>{props.data.raca.nome}</Col>
            <Col>{props.data.classes.map((element) => `${element.nome} `)}</Col>
            <Col>{props.data.antecedente}</Col>
            <Col>{props.data.alinhamento}</Col>
          </Row>
          <Row>
            <Col>
              Vida: {props.data.pvAtual}-{props.data.pvMax} /{' '}
              {props.data.pvTemp}
              <BarraDeVida
                pvMax={props.data.pvMax}
                pvAtual={props.data.pvAtual}
                pvTemp={props.data.pvTemp}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              Experiencia: {props.data.experienciaAtual} /{' '}
              {props.data.experienciaProxNivel}
              <BarraDeExperiencia
                experienciaAtual={props.data.experienciaAtual}
                experienciaProxNivel={props.data.experienciaProxNivel}
              />
            </Col>
          </Row>
          <Row>
            <Col>CA: {props.data.classDeArmadura}</Col>
            <Col>INICIATIVA: {props.data.iniciativa}</Col>
            <Col>DESLOCAMENTO: {props.data.deslocamento}</Col>
          </Row>
        </Media.Body>
      </Media>
    </Col>
  </Row>
);

export default personagemInfo;
