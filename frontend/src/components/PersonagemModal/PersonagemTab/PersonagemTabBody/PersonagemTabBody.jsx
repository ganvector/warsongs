import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AtributoDiv from './AtributoDiv/AtributoDiv';
import DadosDeVida from './DadosDeVida/DadosDeVida';
import TesteContraMorte from './TesteContraMorte/TesteContraMorte';

const personagemTabBody = (props) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <DadosDeVida
            dadosDeVidaTotal={props.dadosDeVidaTotal}
            dadosDeVidaAtual={props.dadosDeVidaAtual}
          />
        </Col>
        <Col>
          <TesteContraMorte testes={props.testeContraMorte} />
        </Col>
      </Row>
      <Row id="PersonagemTabAtributos">
        <Col>
          <Row>
            <Col>
              <AtributoDiv
                nome="Força"
                valor={props.atributoPontos.forca}
                modificador={props.atributoModificador.forca}
              />
            </Col>
            <Col>
              <AtributoDiv
                nome="Inteligência"
                valor={props.atributoPontos.inteligencia}
                modificador={props.atributoModificador.inteligencia}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AtributoDiv
                nome="Destreza"
                valor={props.atributoPontos.destreza}
                modificador={props.atributoModificador.destreza}
              />
            </Col>
            <Col>
              <AtributoDiv
                nome="Sabedoria"
                valor={props.atributoPontos.sabedoria}
                modificador={props.atributoModificador.sabedoria}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AtributoDiv
                nome="Constituição"
                valor={props.atributoPontos.constituicao}
                modificador={props.atributoModificador.constituicao}
              />
            </Col>
            <Col>
              <AtributoDiv
                nome="Carisma"
                valor={props.atributoPontos.carisma}
                modificador={props.atributoModificador.carisma}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default personagemTabBody;
