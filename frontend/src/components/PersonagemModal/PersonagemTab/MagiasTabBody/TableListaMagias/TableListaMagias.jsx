import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const niveisNomes = {
  nv0: 'Truques',
  nv1: 'Nível 1',
  nv2: 'Nível 2',
  nv3: 'Nível 3',
  nv4: 'Nível 4',
  nv5: 'Nível 5',
  nv6: 'Nível 6',
  nv7: 'Nível 7',
  nv8: 'Nível 8',
  nv9: 'Nível 9'
}

const tempoConjuracao = (tempo) => {
  if (tempo === 'A') { return '1 ação' }
  if (tempo === 'AB') { return '1 ação bônus'}
  return tempo;
}

const magiaDetalhes = (magia, nivel) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col><h3>{magia.nome}</h3></Col>
        </Row>
        <Row>
          <Col>
            {niveisNomes[nivel]} de {magia.escola}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row><Col><strong>Tempo de Conjuração:</strong> { tempoConjuracao(magia.tempoConjuracao) }</Col></Row>
            <Row><Col><strong>Alcance:</strong> { magia.alcance }</Col></Row>
            <Row><Col><strong>Componentes:</strong> { magia.componentes }</Col></Row>
            <Row><Col><strong>Duração:</strong> { magia.duracao }</Col></Row>
          </Col>
        </Row>
        <Row>
          <Col>{ magia.descricao }</Col>
        </Row>
      </Col>
    </Row>
  )
}

const magiaLines = (magias, nivel) => {
  return magias.map((element, index) => {
    return (<div>
      <Accordion.Toggle as={Card.Header} eventKey={`${nivel}_${index}`}>
        <Row>
          <Col>{ element.nome }</Col>
          <Col>{ element.tempoConjuracao}</Col>
          <Col>{ element.alcance}</Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${nivel}_${index}`} >
        { magiaDetalhes(element, nivel) }
      </Accordion.Collapse>
    </div>)
  })
}

const tableListaMagias = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>{niveisNomes[props.nivel]}</Col>
          <Col>Espacos {props.espacos}</Col>
        </Row>
        <Row>
          <Col>NOME</Col>
          <Col>TEMPO</Col>
          <Col>ALCANCE</Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              { magiaLines(props.magias, props.nivel)}
            </Accordion>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default tableListaMagias;
