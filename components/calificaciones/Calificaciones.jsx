import React, { useState } from "react";
import CardMateria from "../card-calificacion/CardMateria";
import ModalCalificacion from "../modal-calificacion/ModalCalificacion";

const Calificaciones = () => {
    const [buscador, setBuscador] = useState("");
  const materias = [
    {id:1, nombreMateria: "HCI"},
    {id:2, nombreMateria: "Matematicas"},
    {id:3, nombreMateria: "Fisica 1"},
    {id:4, nombreMateria: "Fisica 2"},
    {id:5, nombreMateria: "Fisica 3"},
    {id:6, nombreMateria: "Analisis 1"},
    {id:7, nombreMateria: "Analisis 2"},
    {id:8, nombreMateria: "Analisis 3"},
    {id:9, nombreMateria: "Paradigmas"},
    {id:10, nombreMateria: "Sistemas W y D"}
];

  return (
    <>
      <div id="lista-materias-calificaciones">
        <h2>Calificaciones</h2>
        <div id="buscador-materias">
            <input id="buscador-input" type="text" placeholder="Buscar..." onChange={(e) => setBuscador(e.target.value)}/>
        </div>
        <div className="listaMaterias">
            {materias.filter(x => x.nombreMateria.startsWith(buscador))
            .map(m => <CardMateria key={m.id} nombreMateria={m.nombreMateria} />)}
        </div>
      </div>
      
    </>
  );
};

export default Calificaciones;
