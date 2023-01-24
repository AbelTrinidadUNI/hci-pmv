import React, { useState } from 'react'
import CategoriaPregunta from './CategoriaPregunta';

const ModalCrearPregunta = (props) => {
    const categorias = ["#Becas", "#Calificaciones", "#Documentos", "#Extension"];
    const [categoria, setCategoria] = useState([]);
    const [pregunta, setPregunta] = useState("");
    const [anonimo, setAnonimo] = useState(false);
    return <>
        <div className="background-modal" style={{ display: props.mostrar }}>
            <div className="modal-crear-preguntas">
                <div className="modal-header">
                    <h3>Nueva Pregunta</h3>
                    <span className="btn-ocultar-modal" onClick={() => props.setMostrar("none")}>X</span>
                </div>
                <div className="modal-body">
                    <form action="">
                        <div>
                            <label className='lb-nueva-pregunta'>Categorias:</label>
                            <div className='list-input-categorias'>
                                {categorias.map((c, i) => <CategoriaPregunta key={i} descripcion={c} categoriasSeleccionadas={categoria} addCategoria={setCategoria}/>)}
                            </div>
                        </div>
                        <div className='contenedor-pregunta-input'>
                            <label htmlFor="text-area-pregunta" className='lb-nueva-pregunta'>Pregunta</label>
                            <textarea name="" id="text-area-pregunta" rows="10" placeholder='Pregunta...' value={pregunta} onChange={e => {
                                setPregunta(e.target.value || "");
                            }}></textarea>
                        </div>
                        <div>
                            <input type = "checkbox" checked ={anonimo} onChange = {e => {
                                setAnonimo(e.target.checked)
                            }} /> Anonimo?
                        </div>

                        <div className='contenedor-btn-nueva-pregunta'>
                            <button className='btn-crear-pregunta' type='button' onClick={(e) => {
                                e.preventDefault;
                                props.mandarPregunta(categoria, pregunta, anonimo);
                            }}
                            disabled={categoria?.length === 0 || pregunta?.length == 0 ? true : false}
                            >Preguntar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default ModalCrearPregunta
