import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardInicio from "../card-inicio/CardInicio";

const Inicio = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("token")));
  }, []);

  return (
    <div id="inicio">
      <div id="saludo">
        <h2>Bienvenido,</h2>
        <h2>{data?.user}</h2>
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
