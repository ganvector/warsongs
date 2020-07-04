import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DescricaoDaCaracteristica from '../caracteristicasDescricao';


const classeCaracteristica = (classe) => {
  console.log(classe.nome);
  let caracteristicas = classe.caracteristicas.map(caracteristica => {
    return <DescricaoDaCaracteristica caracteristica={caracteristica}/>;
  });
  return (
    <Row id={`caracteristica${classe.nome}`} className={'CaracteristicasClasse'} >
      <Col>
        <Row className={"CaractesticaClasseTitulo"}>
          <Col>Caracteristicas de {classe.nome}</Col>
        </Row>
        {caracteristicas}
      </Col>
    </Row>
  )
}

const classesCaracteristicas = (props) => {
  let caracteristicas = props.classes.map(classe => {
    return classeCaracteristica(classe)
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
