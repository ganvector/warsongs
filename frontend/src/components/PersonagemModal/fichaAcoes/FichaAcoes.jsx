import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FichaAtaque from './FichaAtaques/FichaAtaques';
import FichaMagias from './FichaMagias/FichaMagias';

const fichaAcoes = (props) => {
  return (
    <Col>
      <FichaAtaque />
      <FichaMagias />
      <Row>
        <Col className="AtributoNome">ATAQUES & MAGIAS</Col>
      </Row>
    </Col>
  );
};

export default fichaAcoes;
