import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const fichaDestaque = props => {

  const classes = () => {
    return props.data.classes.map((classe, index) => {
      return (`${classe.nome} ${classe.nivel} `);
    });
  }

  return (
    <Row className="align-items-center" style={{ "marginBottom": "30px" }}>
      <Col md={2}>
        <img src={props.data.img} alt="" height={"200px"} width={"200px"} />
      </Col>
      <Col md={3}>
        <Row>
          <Col>
            <h2>{props.data.nome}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>NOME DO PERSONAGEM</small>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col>
            <Row>
              <Col>
                {classes()}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>CLASSE E NÍVEL</small>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                {props.data.antecedente}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>ANTECEDENTE</small>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                {props.data.playerName}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>NOME DO JOGADOR</small>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>
                {props.data.racaNome}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>RAÇA</small>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                {props.data.tendencia}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>TENDÊNCIA</small>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                {props.data.experiencia}
              </Col>
            </Row>
            <Row>
              <Col>
                <small>PONTOS DE EXPERIÊNCIA</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default fichaDestaque;