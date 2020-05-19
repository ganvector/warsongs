import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const barraDeExperiencia = (props) => (
  <ProgressBar
    variant="success"
    now={props.experienciaAtual}
    max={props.experienciaProxNivel}
    label={`${props.experienciaAtual} / ${props.experienciaProxNivel}`}
  />
);

export default barraDeExperiencia;
