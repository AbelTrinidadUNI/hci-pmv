import React from "react";
import CardInicio from "../card-inicio/CardInicio";

const Inicio = () => {
  return (
    <div id="inicio">
      <div id="saludo">
        <h2>Bienvenido,</h2>
        <h2>Erick Kaito Kikuchi Yamamoto</h2>
      </div>
      <br />
      <div id="cardsInicio">
        <CardInicio titulo="Preguntas" />
        <CardInicio titulo="Calificación" />
        <CardInicio titulo="Becas" />
        <CardInicio titulo="Documentos" />
      </div>
    </div>
  );
};

export default Inicio;
