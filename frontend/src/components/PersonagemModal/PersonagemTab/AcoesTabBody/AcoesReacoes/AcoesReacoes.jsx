import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    let dano;

    if (element.alcance[1]){
      alcanceMaximo = <small>({element.alcance[1]})</small>
    }

    if (element.dano.length > 0) {
      dano = (<td className="ataqueDano">{element.dano}<br/><small>({element.tipoDano})</small></td>);
    }
    else {
      dano = (<td className="ataqueDano">{element.tipoDano}</td>)
    }
    return (
      <tr>
        <td className="ataqueNome">{element.nome}</td>
        <td className="ataqueAlcance">{element.alcance[0]}m{alcanceMaximo}</td>
        <td className="ataqueAcerto">{element.acerto}</td>
        { dano }
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

const acoesReacoes = (props) => {
  let ataques;
  let magias;
  let habilidades;

  if (props.acoes.ataques.length > 0) {
    ataques = (
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
    )
  }
  if (props.acoes.magias.length > 0) {
    magias = (
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
    )
  }
  if (props.acoes.habilidades.length > 0) {
    habilidades = listarHabilidades(props.acoes.habilidades)
  }

  return (<Row>
    <Col>
      { ataques }
      { magias }
      { habilidades }
    </Col>
  </Row>);
};

export default acoesReacoes;
