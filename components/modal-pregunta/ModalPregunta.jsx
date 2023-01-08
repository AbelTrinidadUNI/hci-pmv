import { map } from 'lodash'
import React from 'react'
import CardComentario from '../card-comentario/CardComentario'

const ModalPregunta = (props) => {
    return <>
        <div className="background-modal" style={{ display: props.mostrar }}>
            <div id="modal-preguntas">
                <div className="modal-header">
                    <span className="btn-ocultar-modal btn-ocultar-modal-pregunta" onClick={() => props.setMostrar("none")}>X</span>
                </div>
                <div className="modal-body">
                    <div className='card-pregunta-modal'>
                        <div className='cabecera-pregunta-card-modal'>
                            <div className='foto-perfil foto-perfil-pregunta'>
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <div className='text-cabecera-pregunta-card-modal'>
                                <span>{props.pregunta?.creador}</span>
                                <div className='tags-pregunta'>
                                    {map(props.pregunta?.tags, (t, i) => <span key={i}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className='text-pregunta-modal'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet minus nemo expedita harum quibusdam in minima reprehenderit. Quo, consectetur incidunt.
                        </div>
                        <div className='fecha-pregunta-modal'>
                            <span>{props.pregunta?.fecha?.toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                <div className='comentarios-pregunta-modal'>
                    <h4 className='cantidad-comentarios'>{3} comentarios</h4>
                    <div className='input-comentario-modal'>
                        <input type="text" placeholder='Agregar un comentario' />
                    </div>
                    <div className='lista-comentarios-pregunta'>
                        <CardComentario />
                        <CardComentario />
                        <CardComentario />

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ModalPregunta
