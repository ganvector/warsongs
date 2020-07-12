import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AcoesAcoes from './AcoesAcoes/AcoesAcoes';
import AcoesBonus from './AcoesBonus/AcoesBonus';
import AcoesReacoes from './AcoesReacoes/AcoesReacoes';
import AcoesOutros from './AcoesOutros/AcoesOutros';

const acoesTabBody = (props) => (
  <Row className="AcoesTab">
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
                  <AcoesReacoes acoes={props.acoes.reacoes}/>
                </Tab>
                <Tab eventKey="outros" title="Outros">
                  <Row>
                    <Col>
                      <Row>
                        <Col><strong>Ações em combate</strong></Col>
                      </Row>
                      <Row>
                        <Col>Interagir com um objeto</Col>
                      </Row>
                    </Col>
                  </Row>
                  <AcoesOutros acoes={props.acoes.outros} />
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
