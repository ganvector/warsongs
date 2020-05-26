import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const proficiente = (valor) => {
  if (valor) {
    return <Col className="Bullet Filled" />;
  }
  return <Col className="Bullet" />;
};

const formatarValor = (valor) => {
  if (valor >= 0) {
    return <Col>+{valor}</Col>;
  }
  return <Col>-{valor}</Col>;
};
// TODO classificar as pericias por ordem afabetica
const pericias = (props) => (
  <Row>
    <Col>
      <Row>
        <Col>Pericias</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.acrobacia.proficiente)}
                <Col>{formatarValor(props.pericias.acrobacia.valor)}</Col>
                <Col>Acrobacia</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.investigacao.proficiente)}
                <Col>{formatarValor(props.pericias.investigacao.valor)}</Col>
                <Col>Investigacão</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.adestrarAnimais.proficiente)}
                <Col>{formatarValor(props.pericias.adestrarAnimais.valor)}</Col>
                <Col>Adestrar Animais</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.medicina.proficiente)}
                <Col>{formatarValor(props.pericias.medicina.valor)}</Col>
                <Col>Medicina</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.arcanismo.proficiente)}
                <Col>{formatarValor(props.pericias.arcanismo.valor)}</Col>
                <Col>Arcanismo</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.natureza.proficiente)}
                <Col>{formatarValor(props.pericias.natureza.valor)}</Col>
                <Col>Natureza</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.atletismo.proficiente)}
                <Col>{formatarValor(props.pericias.atletismo.valor)}</Col>
                <Col>Atletismo</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.percepcao.proficiente)}
                <Col>{formatarValor(props.pericias.percepcao.valor)}</Col>
                <Col>Percepção</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.blefar.proficiente)}
                <Col>{formatarValor(props.pericias.blefar.valor)}</Col>
                <Col>Blefar</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.atuacao.proficiente)}
                <Col>{formatarValor(props.pericias.atuacao.valor)}</Col>
                <Col>Atuação</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.furtividade.proficiente)}
                <Col>{formatarValor(props.pericias.furtividade.valor)}</Col>
                <Col>Furtividade</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.persuasao.proficiente)}
                <Col>{formatarValor(props.pericias.persuasao.valor)}</Col>
                <Col>Persuasão</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.historia.proficiente)}
                <Col>{formatarValor(props.pericias.historia.valor)}</Col>
                <Col>História</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.prestidigitacao.proficiente)}
                <Col>{formatarValor(props.pericias.prestidigitacao.valor)}</Col>
                <Col>Prestidigitacao</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.intimidacao.proficiente)}
                <Col>{formatarValor(props.pericias.intimidacao.valor)}</Col>
                <Col>Intimidação</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.religiao.proficiente)}
                <Col>{formatarValor(props.pericias.religiao.valor)}</Col>
                <Col>Religião</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {proficiente(props.pericias.intuicao.proficiente)}
                <Col>{formatarValor(props.pericias.intuicao.valor)}</Col>
                <Col>Intuição</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                {proficiente(props.pericias.sobrevivencia.proficiente)}
                <Col>{formatarValor(props.pericias.sobrevivencia.valor)}</Col>
                <Col>Sobrevivência</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default pericias;
