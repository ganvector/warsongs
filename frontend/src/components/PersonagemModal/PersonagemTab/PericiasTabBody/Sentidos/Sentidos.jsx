import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sentidos = (props) => (
  <Row>
    <Col>
      <Row>Sentidos</Row>
      <Row>
        <Col>
          <Row>
            <Col>{props.percepcao.valor + 10}</Col>
            <Col>Percepção Passiva</Col>
          </Row>
          <Row>
            <Col>{props.investigacao.valor + 10}</Col>
            <Col>Investigação Passiva</Col>
          </Row>
          <Row>
            <Col>{props.intuicao.valor + 10}</Col>
            <Col>Intuição Passiva</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default sentidos;
