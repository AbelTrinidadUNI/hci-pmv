import React, { useContext, useState } from "react";
import PaginasContext from "../../contexts/PaginasContext";
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
  /* const estiloseleccionNavBar = {
    color: "rgb(0, 136, 255)",
  };
  const [seleccionNavBar, setseleccionNavBar] = useState({
    inicio: "rgb(0, 136, 255)",
    preguntas: "gray",
    becas: "gray",
    documentos: "gray",
    calificaciones: "gray",
  });

  const modificador = (nombreBtn) => {
    switch (nombreBtn) {
      case "inicio":
        setseleccionNavBar({
          inicio: "rgb(0, 136, 255)",
          preguntas: "gray",
          becas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "calificaciones":
        setseleccionNavBar({
          inicio: "gray",
          preguntas: "gray",
          becas: "gray",
          documentos: "gray",
          calificaciones: "rgb(0, 136, 255)",
        });
        break;
      case "preguntas":
        setseleccionNavBar({
          inicio: "gray",
          preguntas: "rgb(0, 136, 255)",
          becas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "becas":
        setseleccionNavBar({
          inicio: "gray",
          becas: "rgb(0, 136, 255)",
          preguntas: "gray",
          documentos: "gray",
          calificaciones: "gray",
        });
        break;
      case "documentos":
        setseleccionNavBar({
          inicio: "gray",
          documentos: "rgb(0, 136, 255)",
          preguntas: "gray",
          becas: "gray",
          calificaciones: "gray",
        });
        break;
    }
  }; */

  const {cambiarPagina, seleccionNavBar} = useContext(PaginasContext);
  return (
    <>
      <ul className="navbar">
        <li
          id="btn-inicio"
          style={{ color: seleccionNavBar.inicio }}
          onClick={(e) => {
            cambiarPagina("inicio");
          }}
        >
          <i className="bi bi-house-fill"></i>
          <span>Inicio</span>
        </li>
        <li
          id="btn-preguntas"
          style={{ color: seleccionNavBar.preguntas }}
          onClick={() => {
            cambiarPagina("preguntas");
          }}
        >
          <i className="bi bi-question-lg"></i>
          <span>Preguntas</span>
        </li>
        <li
          id="btn-becas"
          style={{ color: seleccionNavBar.becas }}
          onClick={() => {
            cambiarPagina("becas");
          }}
        >
          <i className="bi bi-info-lg"></i>
          <span>Becas</span>
        </li>
        <li
          id="btn-documentos"
          style={{ color: seleccionNavBar.documentos }}
          onClick={() => {
            cambiarPagina("documentos");
          }}
        >
          <i className="bi bi-file-text-fill"></i>
          <span>Documentos</span>
        </li>
        <li
          id="btn-calificaciones"
          style={{ color: seleccionNavBar.calificaciones }}
          onClick={() => {
            cambiarPagina("calificaciones");
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
