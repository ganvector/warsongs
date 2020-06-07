import React from 'react';

const converterParaOuro = (preco) => {
  const currency = {
    pc: 0.01,
    pp: 0.1,
    pe: 0.5,
    po: 1,
    pl: 10
  }

  return (
    preco.pc * currency.pc
    + preco.pp * currency.pp
    + preco.pe * currency.pe
    + preco.po * currency.po
    + preco.pl * currency.pl
  )
}

const listarItens = (itens) => {
  return itens.map(element => {
    return (
      <tr>
        <td>{element.equipado}</td>
        <td>{element.nome}</td>
        <td>{element.peso}kg</td>
        <td>{element.qtd}</td>
        <td>{ converterParaOuro(element.preco) }</td>
        <td>{element.tipo}</td>
        <td>{element.propriedades}</td>
      </tr>
    )
  })
}

const equipamentoTabBody = (props) => {
  const equipamentos = [...props.itens.armas, ...props.itens.armaduras, ...props.itens.itens];
  return (
    <table>
      <thead>
        <tr>
          <th>Ativo</th>
          <th>Nome</th>
          <th>Peso</th>
          <th>Qtd</th>
          <th>Preço (PO)</th>
          <th>Tipo</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
      { listarItens(equipamentos) }
      </tbody>
    </table>
  )
}

export default equipamentoTabBody;