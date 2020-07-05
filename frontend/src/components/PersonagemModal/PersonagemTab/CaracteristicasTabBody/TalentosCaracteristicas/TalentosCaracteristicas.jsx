import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DescricaoDaCaracteristica from '../caracteristicasDescricao';

//listarCaracteristicas

const talentosCaracteristicas = (props) => {
  let caracteristicas = props.talentos.map(caracteristica => {
    return <DescricaoDaCaracteristica caracteristica={caracteristica}/>;
  });
  return (
    <Row className={props.className}>
      <Col>
        <Row id={`caracteristicaTalentos`}>
          <Col>
            <Row>
              <Col className={"CaracteristicaTitulo"}>Talentos</Col>
            </Row>
            { caracteristicas }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default talentosCaracteristicas;
