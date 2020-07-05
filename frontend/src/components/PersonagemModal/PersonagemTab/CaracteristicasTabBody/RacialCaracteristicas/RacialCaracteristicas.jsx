import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DescricaoDaCaracteristica from '../caracteristicasDescricao';

//listarCaracteristicas

const racialCaracteristicas = (props) => {
  let caracteristicas = props.raca.caracteristicas.map(caracteristica => {
    return <DescricaoDaCaracteristica caracteristica={caracteristica}/>;
  });
  return (
    <Row className={props.className}>
      <Col>
        <Row id={`caracteristica${props.raca.nome}`}>
          <Col>
            <Row>
              <Col className={"CaracteristicaTitulo"}>Raciais</Col>
            </Row>
            <Row className="CaractesticaSubtitulo">
              <Col>
                { props.raca.nome }
              </Col>
            </Row>
            { caracteristicas }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default racialCaracteristicas;
