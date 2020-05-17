import React, { useState, useRef } from 'react';
import { Col, Row, Popover, Overlay } from 'react-bootstrap';

// const dadosFormating = (dados) =>
//   dados.map((element, index) => (
//     <div>
//       {element.qtd}
//       {element.dado} ({element.classe})
//     </div>
//   ));

function dadosFormating(dados) {
  return dados.map((element) => (
    <div>
      {element.qtd}
      {element.dado} ({element.classe})
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
    <Row style={{ marginTop: '10px' }} onClick={handleClick}>
      <Col md={3} className="AtributoNome">
        Total
      </Col>
      <Col className="AtributoNome" style={{ textDecorator: 'underline' }}>
        {props.data[0].qtd}
        {props.data[0].dado} +
      </Col>
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
    </Row>
  );
};

export default FichaDadosDeVida;
