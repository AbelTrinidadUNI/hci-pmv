import { useRouter } from "next/router";
import React from "react";
import toast, {Toaster} from "react-hot-toast";

const SubModalConfirmacion = (props) => {
  const estilo = {
    display: props.mostrar,
  };

  const router = useRouter();
  return (
    <>
      <div className="background-modal" style={estilo}>
        <div id="modal-confirmacion-revision">
          <div className="modal-header">
            {/* <h1>HCI</h1>
          <span className="btn-ocultar-modal" onClick={() => props.setMostrar("none")}>X</span> */}
          </div>
          <div className="modal-body">
            <p id="texto-confirmacion">
              Desea Pedir Revisión en {props.materia}
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="btn-confirmacion"
              id="btn-conf-si"
              onClick={() => {
                toast.success("Gestionado Con exito");
                props.ocultarModal("none");
                props.setMostrar("none");
                
              }}
            >
              Si
            </button>
            <button
              className="btn-confirmacion"
              onClick={() => 
                {
                props.setMostrar("none");
               
                }
              }
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubModalConfirmacion;
