import React, { useEffect, useState } from 'react'
import CardDocumento from '../card-documento/CardDocumento'
import ModalDocConfirmar from '../modal-doc-confirmar/ModalDocConfirmar';

const Documentos = () => {
    const documentos = [
        { id: 1, nombre: "Constancia", precio: 20000, tiempo: 2 },
        { id: 2, nombre: "Legajo", precio: 25000, tiempo: 3 },
        { id: 3, nombre: "Promedio", precio: 30000, tiempo: 4 },
        { id: 4, nombre: "Antecedentes Academico", precio: 35000, tiempo: 5 },
        { id: 5, nombre: "Boleto Estudiantil", precio: 45000, tiempo: 2 },
    ]
    const [total, setTotal] = useState(0);

    const [view, setView] = useState("none");

    const [docSeleccionados, setDocSeleccionados] = useState([]);

    const [reset, setReset] = useState(false);

    const confirmarSolicitud = () => {
        setView("none");
        setTotal(0);
        setReset(true);
    }

    const addTotal = (id, precio, seleccion) => {
        const newTotal = seleccion ? total + precio : (total - precio);
        setTotal(newTotal >= 0 ? newTotal : 0);

        if(seleccion){
            setDocSeleccionados([...docSeleccionados, documentos.filter(a => a.id == id)[0]])
        }else{
            setDocSeleccionados([...(docSeleccionados.filter(a => a.id !== id))])
        }
        /*if(newTotal > 0)
            setDocSeleccionados([...docSeleccionados, documentos.filter(a => a.id == id)[0]])*/
    }

    useEffect(() => {
        if(reset){
            setReset(false);
        }
    }, [reset])

    return <>
        <div id='documentos'>
            <h2>Documentos</h2>
            <div id='lista-documentos'>
                {
                    documentos.map(d => <CardDocumento key={d.id} idDoc={d.id} nombre={d.nombre} precio={d.precio} tiempo={d.tiempo} addTotal={addTotal} reset={reset}/>)
                }

            </div>
            <button id='btn-doc-confirmar' style={{display: (total > 0) ? "flex" : "none"}} onClick={() => {setView("flex")}}>
                <span>Confirmar</span>
                <span>{total} gs.</span>
            </button>
            <ModalDocConfirmar view={view} setView={setView} confirmar={confirmarSolicitud} docSeleccionados={docSeleccionados} total={total}/>   
        </div>
    </>
}

export default Documentos
