import React, { useState } from 'react'
import CardPregunta from '../card-pregunta/CardPregunta'
import ModalCrearPregunta from '../modal-pregunta/ModalCrearPregunta'
import ModalPregunta from '../modal-pregunta/ModalPregunta'

const Preguntas = () => {
    const preguntas = [
        { id: 1, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 2, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 3, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 4, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 5, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 6, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 7, creador: "Juan Pablo Perez", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },
        { id: 8, creador: "Ramon Ronaldo Riquelme Rotela", pregunta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.", fecha: new Date(), tags: ["#Becas", "#Calificaciones", "#Documentos"] },

    ]

    const [mostrarModal, setMostrarModal] = useState("none");
    const [mostrarCrearPreg, setModalCrearPreg] = useState("none");

    const [preguntaSelec, setPreguntaSelec] = useState({});


    const postApi = async (preguntaJSON) => {
        await console.log("mandando");
        return 200; //se tiene que cambiar por el codigo de estado de la respuesta del servidor
    }

    const mandarPregunta = (categorias, pregunta) => {
        const nuevaPregunta = {
            tags: categorias,
            pregunta: pregunta,
            creadorId: 1, // obtener de en donde se haya guardado
            fecha: new Date()// la fecha se podria asignar directamente en el servidor
        }
        
        /**
         * hacer el envio a la api y si responde de manera correcta ocultar el modal
        */
        console.log("Mnadando pregunta, (falta implementar)");
        if(postApi(nuevaPregunta) === 200){
            setModalCrearPreg("none");
            console.log("Se registro la pregunta")
        }else{
            console.log("No se pudo registrar la pregunta")
        }
    }

    return <>
        <div id='preguntas'>
            <div id='cabecera-preguntas'>
                <h2>Preguntas</h2>
                <i className="bi bi-plus-square-fill add-pregunta" onClick={() => {
                    setModalCrearPreg("flex");
                }}></i>
            </div>
            <div id="buscador-preguntas">
                <input id="buscador-input" type="text" placeholder="Buscar..." onChange={(e) => setBuscador(e.target.value)} />
            </div>
            <div id='lista-preguntas'>
                {preguntas.map(p => <CardPregunta key={p.id} onClick={() => {
                    setMostrarModal("flex")
                    setPreguntaSelec(p)
                }} />)}
            </div>
        </div>
        <ModalCrearPregunta mostrar={mostrarCrearPreg} setMostrar={setModalCrearPreg} mandarPregunta={mandarPregunta}/>                           
        <ModalPregunta mostrar={mostrarModal} setMostrar={setMostrarModal} pregunta={preguntaSelec}/>
    </>
}

export default Preguntas