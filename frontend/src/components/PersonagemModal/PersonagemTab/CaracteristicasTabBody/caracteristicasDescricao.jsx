import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OBSERVACAO_CLASS = 'CaracteristicaObservacao';
const NOME_CLASS = 'CaracteristicaNome';
const DESCRICAO_CLASS = 'CaracteristicaDescricao';

//listarCaracteristicas
/**
 *
 * @param {Object} props
 * @returns {*}
 */
const caracteristicasDescricao = (props) => {
  console.table('props', props.caracteristica);
  let observacao = null;

  if (props.caracteristica?.observacao) {
    if (props.caracteristica.observacao?.titulo) {
      observacao = (
        <Row>
          <Col className={OBSERVACAO_CLASS}>
            {/*{props.caracteristica.observacao.}*/}
            <span className={NOME_CLASS}>{props.caracteristica.observacao.titulo}: </span>
            <span className={DESCRICAO_CLASS}>{props.caracteristica.observacao.texto}</span>
          </Col>
        </Row>
      );
    } else {
      observacao = (
        <Row>
          <Col className={OBSERVACAO_CLASS}>
            {props.caracteristica.observacao}
          </Col>
        </Row>
      )
    }
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <span className={NOME_CLASS}>{props.caracteristica.nome}:</span>
            <span className={DESCRICAO_CLASS}>
              {props.caracteristica.descricao}
            </span>
          </Col>
        </Row>
        {observacao}
      </Col>
    </Row>
  );
};

export default caracteristicasDescricao;
