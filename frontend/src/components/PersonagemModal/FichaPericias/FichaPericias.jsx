import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const periciasNome = [
  'Acrobacia',
  'Arcanismo',
  'Atletismo',
  'Atuação',
  'Blefar',
  'Furtividade',
  'História',
  'Intimidação',
  'Intuição',
  'Investigação',
  'Lidar com Anima',
  'Medicina',
  'Natureza',
  'Percepcao',
  'Persuasão',
  'Prestidigitacão',
  'Religiãoo',
  'Sobrevivência',
];

const proficiente = (value) => {
  if (value) {
    return <div className="ColBulletPericia" style={{ background: '#000' }} />;
  }
  return <div className="ColBulletPericia" />;
};

const listarPericias = (data) => {
  const lstPericiaVal = Object.values(data.pericia_val);
  const lstPericiaProf = Object.values(data.pericia_prof);
  return periciasNome.map((element, index) => (
    <Row className="RowDescrPericias">
      <Col md={1}>{proficiente(lstPericiaProf[index])}</Col>
      <Col md={1} className="ColModPericia">
        {lstPericiaVal[index]}
      </Col>
      <Col className="ColNomePericia">{element}</Col>
    </Row>
  ));
};

const fichaPericias = (props) => (
  <Col style={{ marginLeft: '2px', marginTop: '15px' }}>
    {listarPericias(props.data)}
    <Row>
      <Col>
        <div className="AtributoNome">PERÍCIAS</div>
      </Col>
    </Row>
  </Col>
);

export default fichaPericias;
