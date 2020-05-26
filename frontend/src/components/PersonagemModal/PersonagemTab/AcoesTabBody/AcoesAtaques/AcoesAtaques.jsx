import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const acoes = (listaAcoes) => {
  return listaAcoes.map((element) => {
    <tr>
      <td>{element.nome}</td>
      <td>{element.alcance}</td>
      <td>{element.acerto}</td>
      <td>{element.dano}</td>
      <td>{element.notas}</td>
    </tr>;
  });
};

const acoesAtaques = (props) => {
  return (
    <Row>
      <Col>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Alcance</th>
              <th>Acerto</th>
              <th>Dano</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>{acoes(acoesAtaques)}</tbody>
        </table>
      </Col>
    </Row>
  );
};

export default acoesAtaques;
