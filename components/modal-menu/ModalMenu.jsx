import React from "react";
import Becas from "../becas/Becas";
import Calificaciones from "../calificaciones/Calificaciones";
import Documentos from "../documentos/Documentos";
import Inicio from "../inicio/Inicio";
import Preguntas from "../preguntas/Preguntas";

const ModalMenu = ({view = false, onClose = ()=>{}, onChangeView = ()=>{}}) => {
    const setView = (comp) =>{
        onChangeView(comp)
        onClose()
    }
    return<>
        <div className="background-modal" onClick={onClose}>
            <div className="modal-body" onClick={e => e.stopPropagation()}>
                <i className="bi bi-person-circle person-icon centered"></i>
                <label className="text-l name-side">Erick Kaito Kikuchi</label>
                <label className="text-m side" onClick={()=>setView(<Preguntas />)}>Preguntas</label>
                <label className="text-m side" onClick={()=>setView(<Calificaciones />)}>Calificaciones</label>
                <label className="text-m side" onClick={()=>setView(<Documentos />)}>Documentos</label>
                <label className="text-m side" onClick={()=>setView(<Becas />)}>Becas</label>
                <label className="text-m side" onClick={()=>setView(<Inicio />)}>Inicio</label>
                <label className="text-m return-side" onClick={onClose}>Volver</label>
            </div>
            
        </div>
        <style jsx>{`
        .background-modal{
            width: ${view? "100%":"0%"};
            transition: all 0.25s;
        }
        .modal-body{
            height: 100%;
            width: 75%;
            border-radius: 0 10px 10px 0;
            background-color: white;
            margin-left: -25%;
            display: flex;
            flex-direction: column;
            transition: all 1s;
        }
        .person-icon{
            font-size: 90px;
            margin-top: 16%;
            margin-bottom: 5%;
        }
        .centered{
            text-align: center; 
        }
        .text-l{
            font-size: 24px;
        }
        .text-m{
            font-size: 20px;
        }
        .name-side{
            margin-left: 10%;
        }
        .side{
            margin-left: 10%;
            margin-top: 10%;
        }
        .return-side{
            margin-left: 10%;
            margin-top: 50%;
        }
        `}</style>
    </>
    
}

export default ModalMenu