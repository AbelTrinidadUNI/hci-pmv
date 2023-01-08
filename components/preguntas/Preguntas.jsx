import React, { useState } from 'react'
import CardPregunta from '../card-pregunta/CardPregunta'
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
    const [preguntaSelec, setPreguntaSelec] = useState({});
    return <>
        <div id='preguntas'>
            <div id='cabecera-preguntas'>
                <h2>Preguntas</h2>
                <i className="bi bi-plus-square-fill add-pregunta"></i>
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
        <ModalPregunta mostrar={mostrarModal} setMostrar={setMostrarModal} pregunta={preguntaSelec}/>
    </>
}

export default Preguntas
