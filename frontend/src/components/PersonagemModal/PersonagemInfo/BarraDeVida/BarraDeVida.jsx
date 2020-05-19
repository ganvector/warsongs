import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const barraDeVida = (props) => (
  <ProgressBar>
    <ProgressBar
      variant="danger"
      now={props.pvAtual}
      max={props.pvMax}
      label={`${props.pvAtual} / ${props.pvMax}`}
    />
    <ProgressBar
      variant="info"
      now={props.pvTemp}
      max={props.pvMax}
      label={props.pvTemp}
    />
  </ProgressBar>
);

export default barraDeVida;
