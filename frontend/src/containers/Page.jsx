import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Counter from "../components/counter";
import axios from "axios";
import PersonagemCard from "../components/PersonagemCard/PersonagemCard";
import PersonagemModal from '../components/PersonagemModal/PersonagemModal';

import './Page.scss';

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
      console.log(data.data.campanhas); // TODO remover esse console.log
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
      console.log(data.data[0]);
      document.querySelector(
        "#personagens"
      ).textContent = `${data.data[0].nome}`;
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
        <PersonagemCard nome="vitor" />
        <PersonagemCard nome="eric" />
        <PersonagemCard nome="ximira" />
        <PersonagemModal />
      </div>
    );
  }
}

export default Page;
