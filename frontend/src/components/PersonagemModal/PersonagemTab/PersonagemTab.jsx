import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import PersonagemTabBody from './PersonagemTabBody/PersonagemTabBody';
import PericiasTabBody from './PericiasTabBody/PericiasTabBody';
import AcoesTabBody from './AcoesTabBody/AcoesTabBody';
import MagiasTabBody from './MagiasTabBody/MagiasTabBody';
import EquipamentosTabBody from './EquipamentosTabBody/EquipamentosTabBody';

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
      <PericiasTabBody
        teste_res={props.data.teste_de_resistencia}
        pericias={props.data.pericias}
      />
    </Tab>
    <Tab eventKey="acoes" title="Açoes">
      <AcoesTabBody acoes={props.data.acoes} />
    </Tab>
    <Tab eventKey="magias" title="Magias">
      <MagiasTabBody conjuracao={props.data.conjuracao} />
    </Tab>
    <Tab eventKey="equipamento" title="Equipamento">
      <EquipamentosTabBody itens={props.data.equipamento}/>
    </Tab>
    <Tab eventKey="caracteristicas" title="Caracteristicas">
      Pericias
    </Tab>
  </Tabs>
);

export default personagemTab;
