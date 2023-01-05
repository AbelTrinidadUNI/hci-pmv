import React from "react";
import Calificaciones from "../calificaciones/Calificaciones";
import Inicio from "../inicio/Inicio";

const Navbar = (props) => {
  /* const califi = () => {
      props.setView(<Calificaciones/>) 
      console.log("califiicaciones")
  } */
  return (
    <>
      <ul className="navbar">
        <li id="btn-inicio" onClick={(e) => props.setView(<Inicio/>)}>
          <i className="bi bi-house-fill"></i>
          <span>Inicio</span>
        </li>
        <li id="btn-preguntas">
          <i className="bi bi-question-lg"></i>
          <span>Preguntas</span>
        </li>
        <li id="btn-becas">
          <i className="bi bi-info-lg"></i>
          <span>Becas</span>
        </li>
        <li id="btn-documentos">
          <i className="bi bi-file-text-fill"></i>
          <span>Documentos</span>
        </li>
        <li id="btn-calificaciones" onClick={() => props.setView(<Calificaciones/>)}>
          <i className="bi bi-percent"></i>
          <span>Calificaciones</span>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
