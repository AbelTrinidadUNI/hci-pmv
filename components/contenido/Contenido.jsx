import React, { useState } from 'react'
import Inicio from '../inicio/Inicio';

const Contenido = (props) => {
  
  return (
    <div id='contenido'>
      {props.view}
    </div>
  )
}

export default Contenido;
