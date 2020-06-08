import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//TODO listar as classes
const listarClasses = (classes) => {
  return (
    <Row>
      <Col>
        Classes
      </Col>
    </Row>
  )
}

const caracteristicasTabBody = (props) => {
  return (
    <Row>
      <Col>
        <circle fill="#383838" x={5} y={5}></circle>
      </Col>
    </Row>
  );
}

export default caracteristicasTabBody;