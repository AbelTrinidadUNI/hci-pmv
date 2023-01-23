import React, { useContext } from "react";
import PaginasContext from "../../contexts/PaginasContext";

const CardInicio = (props) => {
  const {cambiarPagina} = useContext(PaginasContext);

  return <>
    <div className="card-inicio" onClick={() => {
      cambiarPagina(props.titulo)
    }}>
        <h3>{props.titulo}</h3>
    </div>
  </>;
};

export default CardInicio;
