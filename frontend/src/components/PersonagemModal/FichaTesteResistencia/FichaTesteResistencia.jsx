import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
  'border-radius': '50%',
  width: '14px',
  height: '14px',
  border: '3px solid #000',
};

const proficiente = (value) => {
  if (value) {
    return (
      <div className="ColBulletPericia" style={{ background: '#000' }}></div>
    );
  }
  return <div className="ColBulletPericia"></div>;
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
  return atributos.map((element, index) => {
    return (
      <Row className="RowDescrPericias">
        <Col md={1}>{proficiente(listPericiaProf[index])}</Col>
        <Col md={1} className="ColModPericia">
          {listPericiaVal[index]}
        </Col>
        <Col className="ColNomePericia">{element}</Col>
      </Row>
    );
  });
};

const fichaTesteResistencia = (props) => {
  return (
    <Col style={{ marginLeft: '2px', marginTop: '9px' }}>
      {listarPericias(props.data)}

      <Row className="RowDescrPericias">
        <Col>
          <div className="AtributoNome">TESTE DE RESISTÊNCIA</div>
        </Col>
      </Row>
    </Col>
  );
};

export default fichaTesteResistencia;
