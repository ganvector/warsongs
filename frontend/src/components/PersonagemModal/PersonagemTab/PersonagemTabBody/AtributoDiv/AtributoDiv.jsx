import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const atributosDiv = (props) => (
  <Row>
    <Col>
      <Row>
        <Col>{props.nome}</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>{props.valor}</Col>
          </Row>
          <Row>
            <Col>Valor</Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>{props.modificador}</Col>
          </Row>
          <Row>
            <Col>Modificador</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default atributosDiv;
