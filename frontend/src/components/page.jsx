import React, { Component } from "react";
import Navbar from "./navbar";
import Counter from "./counter";
import axios from "axios";
import PersonagemCard from "./personagem_card";

function get_estatisticas(event) {
  axios
    .get("/estatisticas")
    .then(data => {
      console.log(data);
      document.querySelector(
        "#estatisticas"
      ).textContent = `${data.data.usuarios} Usuario(s)`;
    })
    .catch(err => console.log(err.message));
}

function get_campanhas(event) {
  axios
    .get("campanha/get_campanhas")
    .then(data => {
      console.log(data.data.campanhas);
      document.querySelector(
        "#campanhas"
      ).textContent = `${data.data.campanhas}`;
    })
    .catch(err => console.log(err.message));
}

function get_personagens(event) {
  axios
    .get("personagens/get_personagens")
    .then(data => {
      console.log(data.data.personagens);
      document.querySelector(
        "#personagens"
      ).textContent = `${data.data.personagens[1].nome}`;
    })
    .catch(err => console.log(err.message));
}

class Page extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Counter />
        <button onClick={get_estatisticas}>Get Statistics</button>
        <div id="estatisticas"></div>
        <button onClick={get_campanhas}>Get Campanhas</button>
        <div id="campanhas"></div>
        <button onClick={get_personagens}> Get Personagens</button>
        <div id="personagens"></div>
        <PersonagemCard />
      </div>
    );
  }
}

export default Page;
