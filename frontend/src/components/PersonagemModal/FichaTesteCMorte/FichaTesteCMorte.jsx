import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './FichaTesteCMorte.scss';

const testes = (values) => {
  let lista = [false, false, false];
  lista = lista.fill(true, 0, values);

  return lista.map((element) => {
    if (element) {
      return <div className="Bullet Filled"></div>;
    }
    return <div className="Bullet"></div>;
  });
};

const fichaTesteCMorte = (data) => {
  return (
    <Col>
      <Row style={{ 'margin-top': '8px', 'margin-bottom': '6px' }}>
        <Col>
          <Row>
            <Col md={6}>
              <label>SUCESSOS</label>
            </Col>
            {testes(data.sucessos)}
          </Row>
          <Row>
            <Col md={6}>
              <label>FALHAS</label>
            </Col>
            {testes(data.falhas)}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="AtributoNome">TESTE CONTRA MORTE</Col>
      </Row>
    </Col>
  );
};

export default fichaTesteCMorte;
