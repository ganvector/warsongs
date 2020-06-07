import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AcoesAcoes from './AcoesAcoes/AcoesAcoes';
import AcoesBonus from './AcoesBonus/AcoesBonus';
const acoesTabBody = (props) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <Row>
            <Col>
              <Tabs
                variant="pills"
                defaultActiveKey="acoes"
                id="tab_acoes_personagem"
              >
                <Tab eventKey="acoes" title="Ações">
                  <Row>
                    <Col>
                      <strong>Ações em combate</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Atacar, lançar magia, correr, desengajar, fugir, segurar,
                      ajudar, esconder, improvisar, preparar, procurar,
                      empurrar, usar um objeto.
                    </Col>
                  </Row>
                  <AcoesAcoes acoes={props.acoes.acoes} />
                </Tab>
                <Tab eventKey="acao_bonus" title="Ação Bônus">
                  <AcoesBonus acoes={props.acoes.acoesBonus} />
                </Tab>
                <Tab eventKey="reacao" title="Reação">
                  <Row>
                    <Col>
                      <strong>Reações em combate</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Ataques de oportunidade.</Col>
                  </Row>
                </Tab>
                <Tab eventKey="outros" title="Outros">
                  outros
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default acoesTabBody;
