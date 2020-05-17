import React, { useState, useRef } from 'react';
import { Col, Popover, Overlay } from 'react-bootstrap';

function dadosFormating(dados) {
  return dados.map((element) => (
    <div>
      {element.qtd} {element.dado} ({element.classe})
    </div>
  ));
}

const FichaDadosDeVida = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState([]);
  const [dados, setDados] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    const newDados = dadosFormating(props.data);
    setDados(newDados);
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Col
      className="AtributoBase"
      style={{ fontSize: '28px' }}
      onClick={handleClick}
    >
      {props.data[0].qtd}
      {props.data[0].dado} +
      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref.current}
        dados={{ oi: 'olar' }}
        containerPadding={10}
      >
        <Popover id="popover-dv-atual">
          <Popover.Content>{dados}</Popover.Content>
        </Popover>
      </Overlay>
    </Col>
  );
};

export default FichaDadosDeVida;
