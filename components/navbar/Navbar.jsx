import React, { useState } from "react";
import Becas from "../becas/Becas";
import Calificaciones from "../calificaciones/Calificaciones";
import CardBeca from "../card-beca/CardBeca";
import Documentos from "../documentos/Documentos";
import Inicio from "../inicio/Inicio";
import Preguntas from "../preguntas/Preguntas";

const Navbar = (props) => {
  /* const califi = () => {
      props.setView(<Calificaciones/>) 
      console.log("califiicaciones")
  } */
  const estiloSeleccion = {
    color: "rgb(0, 136, 255)",
  };
  const [seleccion, setSeleccion] = useState({
    inicio: "rgb(0, 136, 255)",
    preguntas: "gray",
    becas: "gray",
    documentos: "gray",
    calificaciones: "gray",
  });

  const modificador = (nombreBtn) => {
    switch (nombreBtn) {
      case "inicio":
        setSeleccion({
          inicio: "rgb(0, 136, 255)",
          preguntas: "gray",
          becas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "calificaciones":
        setSeleccion({
          inicio: "gray",
          preguntas: "gray",
          becas: "gray",
          documentos: "gray",
          calificaciones: "rgb(0, 136, 255)",
        });
        break;
      case "preguntas":
        setSeleccion({
          inicio: "gray",
          preguntas: "rgb(0, 136, 255)",
          becas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "becas":
        setSeleccion({
          inicio: "gray",
          becas: "rgb(0, 136, 255)",
          preguntas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "documentos":
        setSeleccion({
          inicio: "gray",
          documentos: "rgb(0, 136, 255)",
          preguntas: "gray",
          becas: "gray",
          calificaciones: "gray",
        });
        break;
    }
  };

  return (
    <>
      <ul className="mynavbar">
        <li
          id="btn-inicio"
          style={{ color: seleccion.inicio }}
          onClick={(e) => {
            props.setView(<Inicio name= {props.name}/>);
            modificador("inicio");
          }}
        >
          <i className="bi bi-house-fill"></i>
          <span>Inicio</span>
        </li>
        <li
          id="btn-preguntas"
          style={{ color: seleccion.preguntas }}
          onClick={() => {
            props.setView(<Preguntas/>)
            modificador("preguntas");
          }}
        >
          <i className="bi bi-question-lg"></i>
          <span>Preguntas</span>
        </li>
        <li
          id="btn-becas"
          style={{ color: seleccion.becas }}
          onClick={() => {
            props.setView(<Becas/>)
            modificador("becas");
          }}
        >
          <i className="bi bi-info-lg"></i>
          <span>Becas</span>
        </li>
        <li
          id="btn-documentos"
          style={{ color: seleccion.documentos }}
          onClick={() => {
            props.setView(<Documentos/>)
            modificador("documentos");
          }}
        >
          <i className="bi bi-file-text-fill"></i>
          <span>Documentos</span>
        </li>
        <li
          id="btn-calificaciones"
          style={{ color: seleccion.calificaciones }}
          onClick={() => {
            props.setView(<Calificaciones />);
            modificador("calificaciones");
          }}
        >
          <i className="bi bi-percent"></i>
          <span>Calificaciones</span>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
