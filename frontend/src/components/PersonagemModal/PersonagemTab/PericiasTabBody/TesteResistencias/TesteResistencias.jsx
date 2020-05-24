import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import {formatarValor, proficiente} from '~/'

const testeResistencias = (props) => (
  <Row>
    <Col>
      <Row>
        <Col>Testes de Resistênca</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                {proficiente(props.teste_res.forca.proficiente)}
                <Col>{formatarValor(props.teste_res.forca.valor)}</Col>
                <Col>Forca</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.teste_res.inteligencia.proficiente)}
                <Col>Valor</Col>
                <Col>Inteligencia</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.teste_res.destreza.proficiente)}
                <Col>Valor</Col>
                <Col>Destreza</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.teste_res.sabedoria.proficiente)}
                <Col>Valor</Col>
                <Col>Sabedoria</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.teste_res.constituicao.proficiente)}
                <Col>Valor</Col>
                <Col>Constituição</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.teste_res.carisma.proficiente)}
                <Col>Valor</Col>
                <Col>Carisma</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default testeResistencias;
