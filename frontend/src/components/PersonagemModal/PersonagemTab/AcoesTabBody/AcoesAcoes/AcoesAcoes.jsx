import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './AcoesAcoes.scss'

const listarAtaques = (listaArmas) => {
  return listaArmas.map((element) => {
    let alcanceMaximo = '';
    if (element.alcance[1]){
      alcanceMaximo = <small>({element.alcance[1]})</small>
    }
    return (
      <tr>
        <td className="ataqueNome">{element.nome}</td>
        <td className="ataqueAlcance">{element.alcance[0]}m{alcanceMaximo}</td>
        <td className="ataqueAcerto">{element.acerto}</td>
        <td className="ataqueDano">{element.dano}<br/><small>({element.tipoDano})</small></td>
        <td className="ataquePropriedades"><small>{element.propriedades}</small></td>
      </tr>
    );
  });
}

const listarMagias = (listaArmas) => {
  return listaArmas.map((element) => {
    let alcanceMaximo = '';
    if (element.alcance[1]){
      alcanceMaximo = <small>({element.alcance[1]})</small>
    }
    return (
      <tr>
        <td className="ataqueNome">{element.nome}</td>
        <td className="ataqueAlcance">{element.alcance[0]}m{alcanceMaximo}</td>
        <td className="ataqueAcerto">{element.acerto}</td>
        <td className="ataqueDano">{element.dano}<br/><small>({element.tipoDano})</small></td>
        <td className="ataquePropriedades"><small>{element.propriedades}</small></td>
      </tr>
    );
  });
}

const listarHabilidades = (listaHabilidades) => {
  return listaHabilidades.map((element) => {
    return (
      <Row className="Acao">
        <Col>
          <Row><Col>
            <strong>{element.nome}</strong>
          </Col></Row>
          <Row><Col>{element.descricao}</Col></Row>
        </Col>
      </Row>
    )
  })
}

const acoesAcoes = (props) => {
  return (<Row>
    <Col>
      <Row className="Acao">
        <Col>
          <table className="TableAtaques">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Alcance</th>
                <th>Acerto</th>
                <th>Dano</th>
                <th>Propriedades</th>
              </tr>
            </thead>
            <tbody>
              {listarAtaques(props.acoes.ataques)}
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className="Acao">
        <Col>
          <table className="TableAtaques">
            <thead>
            <tr>
              <th>Nome</th>
              <th>Alcance</th>
              <th>Acerto</th>
              <th>Efeito</th>
              <th>Propriedades</th>
            </tr>
            </thead>
            <tbody>
            {listarMagias(props.acoes.magias)}
            </tbody>
          </table>
        </Col>
      </Row>
      { listarHabilidades(props.acoes.habilidades)}
    </Col>
  </Row>);
};

export default acoesAcoes;
