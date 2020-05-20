import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import PersonagemTabBody from './PersonagemTabBody/PersonagemTabBody';

const personagemTab = (props) => (
  <Tabs defaultActiveKey="personagem" id="tab_info_personagem">
    <Tab eventKey="personagem" title="Personagem">
      <PersonagemTabBody
        dadosDeVidaTotal={props.data.dadosDeVidaTotal}
        dadosDeVidaAtual={props.data.dadosDeVidaAtual}
        testeContraMorte={props.data.testeContraMorte}
        atributoPontos={props.data.atributoPontos}
        atributoModificador={props.data.atributoModificadores}
      />
    </Tab>
    <Tab eventKey="pericias" title="Pericias">
      Pericias
    </Tab>
    <Tab eventKey="acoes" title="Açoes">
      Pericias
    </Tab>
    <Tab eventKey="magias" title="Magias">
      Pericias
    </Tab>
    <Tab eventKey="equipamento" title="Equipamento">
      Pericias
    </Tab>
    <Tab eventKey="caracteristicas" title="Caracteristicas">
      Pericias
    </Tab>
  </Tabs>
);

export default personagemTab;
