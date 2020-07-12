import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TesteResistencias from './TesteResistencias/TesteResistencias';
import Pericias from './Pericias/Pericias';
import Sentidos from './Sentidos/Sentidos';

const periciasTabBody = (props) => (
  <Row className="PericiasTab">
    <Col>
      <TesteResistencias className="Marginado" teste_res={props.teste_res} />
      <Pericias className="Marginado" pericias={props.pericias} />
      <Sentidos
        className="Marginado"
        percepcao={props.pericias.percepcao}
        investigacao={props.pericias.investigacao}
        intuicao={props.pericias.intuicao}
      />
    </Col>
  </Row>
);

export default periciasTabBody;
