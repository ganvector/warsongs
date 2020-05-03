import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FichaAtaque from './FichaAtaques/FichaAtaques';
import FichaMagias from './FichaMagias/FichaMagias';

const fichaAcoes = (props) => {
  return (
    <Col>
      <Row style={{ height: '380px' }}>
        <Col>
          <FichaAtaque ataques={props.ataques} />
          <FichaMagias magias={props.magias} />
        </Col>
      </Row>

      <Row>
        <Col className="AtributoNome">ATAQUES & MAGIAS</Col>
      </Row>
    </Col>
  );
};

export default fichaAcoes;
