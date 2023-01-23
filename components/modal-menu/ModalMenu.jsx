import React, { useContext, useEffect, useState } from "react";
import PaginasContext from "../../contexts/PaginasContext";

const ModalMenu = ({}) => {
    const {cambiarPagina, showMenuModal, setShowMenuModal} = useContext(PaginasContext);

    const [data, setData] = useState({});

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("token")));
    }, []);

    const setView = (comp) =>{
        cambiarPagina(comp)
        setShowMenuModal(false)
    }
    return<>
        <div className="background-modal" onClick={()=>{setShowMenuModal(false)}}>
            <div className="modal-body-custom" onClick={e => e.stopPropagation()}>
                <i className="bi bi-person-circle person-icon centered"></i>
                <label className="text-l name-side">{data?.user}</label>
                <label className="text-m side" onClick={()=>setView("preguntas")}>Preguntas</label>
                <label className="text-m side" onClick={()=>setView("calificaciones")}>Calificaciones</label>
                <label className="text-m side" onClick={()=>setView("documentos")}>Documentos</label>
                <label className="text-m side" onClick={()=>setView("becas")}>Becas</label>
                <label className="text-m side" onClick={()=>setView("inicio")}>Inicio</label>
                <label className="text-m return-side" onClick={()=>{setShowMenuModal(false)}}>Volver</label>
            </div>
        </div>
        <style jsx>{`
        .background-modal{
            width: ${showMenuModal? "100vw":"0vw"};
            transition: all 0.25s;
        }
        .modal-body-custom{
            height: 100vh;
            width: 75vw;
            border-radius: 0 10px 10px 0;
            background-color: white;
            margin-left: -25vw;
            display: flex;
            flex-direction: column;
            transition: all 1s;
        }
        .person-icon{
            font-size: 12vh;
            margin-top: 6vh;
            margin-bottom: 2vh;
            color: rgb(0, 136, 255);
        }
        .centered{
            text-align: center; 
        }
        .text-l{
            font-size: 4vh;
        }
        .text-m{
            font-size: 2.5vh;
        }
        .name-side{
            margin-left: 10vw;
        }
        .side{
            margin-left: 10vw;
            margin-top: 3vh;
        }
        .return-side{
            margin-left: 10vw;
            margin-top: 25vh;
        }
        `}</style>
    </>
    
}

export default ModalMenu