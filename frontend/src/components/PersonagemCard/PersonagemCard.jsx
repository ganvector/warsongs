import React, { Component } from 'react';
import './PersonagemCard.css';

//TODO REMOVER TAG SVG E TUDO DENTR
const personagemCard = (props) => {
  return (
    <span className="card">
      <div className="aditional">
        <div className="user-card">
          <div className="level center">Nível 3</div>
          <div className="points center"> 2150/2700</div>
        </div>
        <div className="more-info">
          <h1>{props.nome}</h1>
          <div className="coords">
            <span>Campanha</span>
            <span>Criado em ...</span>
          </div>
          <div className="coords">
            <span>Posicao</span>
          </div>
          <div className="stats"></div>
        </div>
      </div>
      <div></div>
    </span>
  );
};

export default personagemCard;
