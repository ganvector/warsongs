import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TesteResistencias from './TesteResistencias/TesteResistencias';

const periciasTabBody = (props) => (
  <Row>
    <Col>
      <TesteResistencias teste_res={props.teste_res} />
      <Row>
        <Col>Pericias</Col>
      </Row>
      <Row>
        <Col>Sentidos</Col>
      </Row>
    </Col>
  </Row>
);

export default periciasTabBody;
