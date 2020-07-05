import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DescricaoDaCaracteristica from '../caracteristicasDescricao';


const classeCaracteristica = (classe, className) => {
  let caracteristicas = classe.caracteristicas.map(caracteristica => {
    return <DescricaoDaCaracteristica caracteristica={caracteristica}/>;
  });
  return (
    <Row id={`caracteristica${classe.nome}`} className={className}>
      <Col>
        <Row className={"CaractesticaSubtitulo"}>
          <Col>{classe.nome}</Col>
        </Row>
        {caracteristicas}
      </Col>
    </Row>
  )
}

const classesCaracteristicas = (props) => {
  let caracteristicas = props.classes.map(classe => {
    return classeCaracteristica(classe, props.className)
  })
  return (
    <Row>
      <Col>
        <Row>
          <Col className={"CaracteristicaTitulo"}>Caracteristicas de Classe</Col>
        </Row>
        { caracteristicas }
      </Col>
    </Row>
  );
};

export default classesCaracteristicas;
