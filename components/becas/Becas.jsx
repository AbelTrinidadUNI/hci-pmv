import { isNull } from 'lodash';
import React, { useEffect, useState } from 'react'
import CardBeca from '../card-beca/CardBeca'
import ModalBeca from '../modal-beca/ModalBeca'

const Becas = () => {
    const becas = [
        { 
            id: 1, 
            titulo: "Beca 1", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 2, 
            titulo: "Beca 2", 
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse debitis mollitia unde possimus recusandae ipsam qui nihil, autem cupiditate?",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 3, 
            titulo: "Beca 3", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 4, 
            titulo: "Beca 4", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 5, 
            titulo: "Beca 5", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 6, 
            titulo: "Beca 6", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        },
        { 
            id: 7, 
            titulo: "Beca 7", 
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam!",
            tags: ["#beca", "#posgrado", "#intercambio"],
            fecha: new Date().toJSON,
            creador: "Juan Perez"
        }
    ];
    const [modal, setModal] = useState("none");
    const [becaSelecionada, setBecaSeleccionada] = useState(null);

    const seleccionarBeca = (idBeca) => {
        setBecaSeleccionada(becas.filter(b => b.id === idBeca)[0]); 
        setModal("flex");
    };


    return <>
        <div id='becas'>
            <div id='becas-titulo'>
                <h2>Becas</h2>
            </div>
            <div id='lista-becas'>
                {becas.map(b => <CardBeca key={b.id} idBeca={b.id} titulo={b.titulo} tags={b.tags} click={seleccionarBeca} />)}
            </div>
            <ModalBeca mostrar={modal} setMostrar={setModal} beca={becaSelecionada}/>
        </div>
        
    </>
}

export default Becas
