import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FichaAtaques.scss';

// {
//   nome: 'Adaga',
//   alcance: { tipo: 'corpo a corpo' },
//   propriedades: {
//     municao: false,
//     alcance: 'Corpo a corpo',
//     tipo: 'Uma mão',
//   },
//   acerto: '+4',
//   dano: '1d4+2 Cortante',
// }

const montarTabelaAtaques = (ataques) => (
  // <tbody>
  //   {ataques.map((element) => {
  //     return (
  //       <tr>
  //         <td>{element.nome}</td>
  //         <td>{element.acerto}</td>
  //         <td>{element.dano}</td>
  //       </tr>
  //     );
  //   })}
  // </tbody>
  <Row className="tableBody">
    <Col>
      {ataques.map((element) => (
        <Row>
          <Col md={4}>{element.nome}</Col>
          <Col md={3}>{element.acerto}</Col>
          <Col md={5}>{element.dano}</Col>
        </Row>
      ))}
    </Col>
  </Row>
);

const fichaAtaque = (props) => (
  <Row className="tableAcoes">
    <Col>
      <Row>
        <Col style={{ 'font-size': '14px', 'font-weight': 'bold' }}>
          ATAQUES
        </Col>
      </Row>
      <Row className="tableHead">
        <Col md={4}>NOME</Col>
        <Col md={3}>ACERTO</Col>
        <Col md={5}>DANO</Col>
      </Row>
      {montarTabelaAtaques(props.ataques)}
    </Col>
  </Row>
);

export default fichaAtaque;
