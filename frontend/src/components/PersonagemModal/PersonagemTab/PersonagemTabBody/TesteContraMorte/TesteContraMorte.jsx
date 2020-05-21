import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const testes = (values) => {
  let lista = [false, false, false];
  lista = lista.fill(true, 0, values);

  return lista.map((element) => {
    if (element) {
      return <div className="Bullet Filled" />;
    }
    return <div className="Bullet" />;
  });
};

const testeContraMorte = (props) => (
  <Row id="testeContraMorte">
    <Col>
      <Row>
        <Col>TESTE CONTRA MORTE</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col md={6}>SUCESSOS</Col>
            {testes(props.testes.sucesso)}
          </Row>
          <Row>
            <Col md={6}>FALHAS</Col>
            {testes(props.testes.falhas)}
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default testeContraMorte;
