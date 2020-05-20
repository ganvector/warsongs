import React, { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const dadosDeVida = (props) => (
  <Row id="dadosDeVida">
    <Col>
      <Row>
        <Row>
          <Col>DADOS DE VIDA</Col>
        </Row>
        <Col>Total:</Col>
        <Col>
          {props.dadosDeVidaTotal[0].qtd}
          {props.dadosDeVidaTotal[0].dado}
        </Col>
      </Row>
      <Row>
        <Col>
          {props.dadosDeVidaAtual[0].qtd}
          {props.dadosDeVidaAtual[0].dado}
        </Col>
      </Row>
    </Col>
  </Row>
);
export default dadosDeVida;
