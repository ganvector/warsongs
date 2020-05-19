import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FichaMagias.scss';

const montarTabelaMagias = (magias) => (
  // TODO abrir um modal que mostra as infos
  <tbody>
    {magias.map((element) => (
      <tr>
        <td>{element.nome}</td>
      </tr>
    ))}
  </tbody>
);

const fichaMagia = (props) => {
  if (props.magias.length > 0) {
    return (
      <Row>
        <Col>
          <table className="tableMagias">
            <thead>
              <tr>
                <th>MAGIAS</th>
              </tr>
            </thead>
            {montarTabelaMagias(props.magias)}
          </table>
        </Col>
      </Row>
    );
  }
  return <br />;
};

export default fichaMagia;
