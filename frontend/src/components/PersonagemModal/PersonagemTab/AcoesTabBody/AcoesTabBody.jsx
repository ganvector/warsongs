import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AcoesAtaques from './AcoesAtaques/AcoesAtaques';

const acoesTabBody = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Row>
              <Col>
                <strong>Ações em combate</strong>
              </Col>
            </Row>
            <Row>
              <Col>
                Atacar, lançar magia, correr, desengajar, fugir, segurar,
                ajudar, esconder, improvisar, preparar, procurar, empurrar, usar
                um objeto.
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <strong>Ataques e Magias</strong>
              </Col>
            </Row>
            <AcoesAtaques />
            <Row>
              <Col>Magias</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default acoesTabBody;
