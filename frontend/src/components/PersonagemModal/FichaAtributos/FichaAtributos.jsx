import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
  border: '3px solid orange',
  marginTop: '21px',
  height: '120px',
};

const fichaAtributos = (props) => {
  return (
    <Col md={4} style={{ marginTop: '9px' }}>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">FORÇA</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['for']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['for']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">DESTREZA</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['des']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['des']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">CONSTITUIÇÂO</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['con']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['con']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">INTELIGÊNCIA</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['int']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['int']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">SABEDORIA</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['sab']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['sab']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style}>
        <Col>
          <Row>
            <Col>
              <div className="AtributoNome">CARISMA</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoBase">{props.data.atr_base['car']}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="AtributoMod">{props.data.atr_mod['car']}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default fichaAtributos;
