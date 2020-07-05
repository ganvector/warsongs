import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ClassesCaracteristicas from './ClassesCaracteristicas/ClassesCaracteristicas';
import RacialCaracteristicas from './RacialCaracteristicas/RacialCaracteristicas';
import TalentosCaracteristicas from './TalentosCaracteristicas/TalentosCaracteristicas';

// <RacialCaracteristicas raca={props.raca} />
// <TalentosCaracteristicas talentos={props.talentos} />

const caracteristicasTabBody = (props) => {
  return (
    <Row className="CaracteristicasTab">
      <Col>
        <RacialCaracteristicas raca={props.raca} className="Caracteristicas"/>
        <ClassesCaracteristicas classes={props.classes} className="Caracteristicas"/>
        <TalentosCaracteristicas talentos={props.talentos} className="Caracteristicas"/>
      </Col>
    </Row>
  );
}

export default caracteristicasTabBody;