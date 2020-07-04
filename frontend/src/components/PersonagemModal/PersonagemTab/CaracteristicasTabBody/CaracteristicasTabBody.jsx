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
        <ClassesCaracteristicas classes={props.classes}/>
        <RacialCaracteristicas raca={props.raca} />
        <TalentosCaracteristicas talentos={props.talentos} />
      </Col>
    </Row>
  );
}

export default caracteristicasTabBody;