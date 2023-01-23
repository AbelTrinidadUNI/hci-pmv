import React, { useContext } from 'react'
import PaginasContext from '../../contexts/PaginasContext';


const Contenido = () => {
  const {paginaActual} = useContext(PaginasContext);

  return (
    <div id='contenido'>
      {paginaActual}
    </div>
  )
}

export default Contenido;
