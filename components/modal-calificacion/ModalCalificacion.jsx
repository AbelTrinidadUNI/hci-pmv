import React, { useState } from "react";
import SubModalConfirmacion from "./SubModalConfirmacion";

const ModalCalificacion = (props) => {
  const estilo = {
    display: props.mostrar
  }
  const [modalConfirmacion, setModalConfirmacion] = useState("none");
  return (
    <div className="background-modal" style={estilo}>
      <div id="modal-calificacion">
        <div className="modal-header">
          <h1>{props.nombreMateria}</h1>
          <span className="btn-ocultar-modal" onClick={() => props.setMostrar("none")}>X</span>
        </div>
        <div className="modal-body">
          <div className="notas-modal">
            <span className="tipo-nota-modal">PP</span>
            <span className="porcentaje-nota-modal">{props.pp}</span>
          </div>
          <div className="notas-modal">
            <span className="tipo-nota-modal">PF</span>
            <span className="porcentaje-nota-modal">{props.pf}</span>
          </div>
          <div className="notas-modal">
            <span className="tipo-nota-modal">Nota Final</span>
            <span className="porcentaje-nota-modal">{props.score}</span>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-revision" onClick={() => setModalConfirmacion("flex")}>Pedir Revisión</button>
        </div>
      </div>
      
    <SubModalConfirmacion mostrar={modalConfirmacion} setMostrar={setModalConfirmacion} ocultarModal={props.setMostrar} materia={props.nombreMateria}/>
    </div>
  );
};

export default ModalCalificacion;
