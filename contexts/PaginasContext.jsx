import React, { createContext, useState } from 'react'
import Becas from '../components/becas/Becas';
import Calificaciones from '../components/calificaciones/Calificaciones';
import Documentos from '../components/documentos/Documentos';
import Inicio from '../components/inicio/Inicio';
import Preguntas from '../components/preguntas/Preguntas';

const PaginasContext = createContext();


const PaginasProvider = ({ children }) => {

    const [paginaActual, setPaginaActual] = useState(<Inicio />);
    const [showMenuModal, setShowMenuModal] = useState(false)

    const estiloSeleccion = {
        color: "rgb(0, 136, 255)",
    };
    const [seleccion, setSeleccion] = useState({
        inicio: "rgb(0, 136, 255)",
        preguntas: "gray",
        becas: "gray",
        documentos: "gray",
        calificaciones: "gray",
    });
    const cambiarPagina = (nombreBtn) => {
        switch (nombreBtn.toLowerCase()) {
            case "inicio":
                setSeleccion({
                    inicio: "rgb(0, 136, 255)",
                    preguntas: "gray",
                    becas: "gray",
                    documentos: "gray",
                    calificaciones: "gray",
                });
                setPaginaActual(<Inicio/>)
                break;
            case "calificaciones":
                setSeleccion({
                    inicio: "gray",
                    preguntas: "gray",
                    becas: "gray",
                    documentos: "gray",
                    calificaciones: "rgb(0, 136, 255)",
                });
                setPaginaActual(<Calificaciones/>)
                break;
            case "preguntas":
                setSeleccion({
                    inicio: "gray",
                    preguntas: "rgb(0, 136, 255)",
                    becas: "gray",
                    documentos: "gray",
                    calificaciones: "gray",
                });
                setPaginaActual(<Preguntas/>)
                break;
            case "becas":
                setSeleccion({
                    inicio: "gray",
                    becas: "rgb(0, 136, 255)",
                    preguntas: "gray",
                    documentos: "gray",
                    calificaciones: "gray",
                });
                setPaginaActual(<Becas/>)
                break;
            case "documentos":
                setSeleccion({
                    inicio: "gray",
                    documentos: "rgb(0, 136, 255)",
                    preguntas: "gray",
                    becas: "gray",
                    calificaciones: "gray",
                });
                setPaginaActual(<Documentos/>)
                break;
        }
    };

    const paginas = { paginaActual, seleccionNavBar:seleccion, cambiarPagina, showMenuModal, setShowMenuModal };

    return <>
        <PaginasContext.Provider value={paginas}>
            {children}
        </PaginasContext.Provider>
    </>
}

export { PaginasProvider };

export default PaginasContext;