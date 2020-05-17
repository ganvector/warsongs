import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const proficiente = (value) => {
  if (value) {
    return <div className="ColBulletPericia" style={{ background: '#000' }} />;
  }
  return <div className="ColBulletPericia" />;
};

const atributos = [
  'Força',
  'Destreza',
  'Constituição',
  'Inteligência',
  'Sabedoria',
  'Carisma',
];

const listarPericias = (data) => {
  const listPericiaVal = Object.values(data.teste_res_val);
  const listPericiaProf = Object.values(data.teste_res);
  return atributos.map((element, index) => (
    <Row className="RowDescrPericias">
      <Col md={1}>{proficiente(listPericiaProf[index])}</Col>
      <Col md={1} className="ColModPericia">
        {listPericiaVal[index]}
      </Col>
      <Col className="ColNomePericia">{element}</Col>
    </Row>
  ));
};

const fichaTesteResistencia = (props) => (
  <Col style={{ marginLeft: '2px', marginTop: '9px' }}>
    {listarPericias(props.data)}

    <Row className="RowDescrPericias">
      <Col>
        <div className="AtributoNome">TESTE DE RESISTÊNCIA</div>
      </Col>
    </Row>
  </Col>
);

export default fichaTesteResistencia;
