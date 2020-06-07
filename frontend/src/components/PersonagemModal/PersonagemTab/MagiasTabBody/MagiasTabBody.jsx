import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TableListaMagias from './TableListaMagias/TableListaMagias';
import tableListaMagias from './TableListaMagias/TableListaMagias';

// {
//   fonte: 'Bruxo',
//     modificador: '+1',
//   ataque: '+7',
//   salvamento: '15',
//   espacosDeMagia: {
//   nv1: 3
// }
// }

const habilidadesConjuracao = (habilidades) => {
  return habilidades.map((element) => {
    return (
    <Row>
      <Col>{element.fonte}</Col>
      <Col>
        <Row>
          <Col>{ element.modificador}</Col>
        </Row>
        <Row>
          <Col>MODIFICADOR</Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>{ element.ataque}</Col>
        </Row>
        <Row>
          <Col>ATAQUE</Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>{ element.salvamento}</Col>
        </Row>
        <Row>
          <Col>SALVAMENTO</Col>
        </Row>
      </Col>
    </Row>)
  });
}

const listarMagias = (listaMagias, listaEspacos) => {
  return listaEspacos.map((element, index) => {
    let nivel = Object.keys(element)[index];
    console.log('niveisDisponiveis', listaMagias[nivel], element[nivel], nivel );
    return (<TableListaMagias magias={listaMagias[nivel]} espacos={element[nivel]} nivel={nivel} />)
  })
}

const magiasTabBody = (props) => {

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            { habilidadesConjuracao(props.conjuracao.habilidades)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <TableListaMagias
                  magias={props.conjuracao.magias.nv0}
                  espacos={0}
                  nivel={'nv0'}
                />
              </Col>
            </Row>
            { listarMagias(props.conjuracao.magias, props.conjuracao.espacosDeMagia) }
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default magiasTabBody;
