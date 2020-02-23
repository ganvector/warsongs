import React, { Component } from "react";
import "../style/personagem_card.css";
import "../style/personagem_card.css";

//TODO REMOVER TAG SVG E TUDO DENTR
class PersonagemCard extends Component {
  render() {
    return (
      <div className="center">
        <div className="card">
          <div className="aditional">
            <div className="user-card">
              <div className="level center">Nível 3</div>
              <div className="points center"> 2150/2700</div>
            </div>
            <div className="more-info">
              <h1>Nome Personagem</h1>
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
        </div>
      </div>
    );
  }
}

export default PersonagemCard;
