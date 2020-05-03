import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FichaProficiencia.scss';

const listProficiencia = (data, tipo) => {
  return data.map((element, index) => {
    return (
      <Row>
        <Col className="ListProficienciaItem">
          {tipo}: {element}
        </Col>
      </Row>
    );
  });
};

const fichaProficiencias = (props) => {
  return (
    <Col>
      <Row>
        <Col className="ListProficiencia">
          {listProficiencia(
            props.data.lstProficiencias.ferramentas,
            'Ferramenta'
          )}
          {listProficiencia(props.data.lstProficiencias.idiomas, 'Idioma')}
          {listProficiencia(props.data.lstProficiencias.armas, 'Arma')}
        </Col>
      </Row>
      <Row className="align-items-end">
        <Col>
          <div className="AtributoNome">OUTRAS PROFICIÊNCIAS & IDIOMAS</div>
        </Col>
      </Row>
    </Col>
  );
};

export default fichaProficiencias;
