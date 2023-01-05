import React, { useState } from "react";
import ModalCalificacion from "../modal-calificacion/ModalCalificacion";

const CardMateria = (props) => {
  const [mostrar, setMostrar] = useState("none");

  return (
    <>
      <div
        className="card-calificacion"
        onClick={(e) => {
          setMostrar("flex");
        }}
      >
        <h3>{props.nombreMateria}</h3>
      </div>
      <ModalCalificacion mostrar={mostrar} setMostrar={setMostrar} nombreMateria={props.nombreMateria} />
    </>
  );
};

export default CardMateria;
