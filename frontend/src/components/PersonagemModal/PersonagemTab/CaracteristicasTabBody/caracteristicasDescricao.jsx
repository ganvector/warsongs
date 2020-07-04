import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//listarCaracteristicas
/**
 *
 * @param {Object} props
 * @returns {*}
 */
const caracteristicasDescricao = (props) => {
  console.table('props', props.caracteristica);
  console.log('Nome', props.caracteristica.nome);
  console.log('Descricao', props.caracteristica.descricao);
  console.log('Observacao', props.caracteristica.observacao);
  let observacao = null;

  if (props.caracteristica?.observacao) {
    observacao = (<Row><Col className="CaracteristicaObservacao">{props.caracteristica.observacao}</Col></Row>)
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <span className="CaracteristicaNome">{props.caracteristica.nome}:</span>
            <span className="CaracteristicaDescricao">{props.caracteristica.descricao}</span>
          </Col>
        </Row>
        {observacao}
      </Col>
    </Row>
  );
};

export default caracteristicasDescricao;
