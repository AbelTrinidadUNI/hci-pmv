import { map } from 'lodash'
import React from 'react'

const ModalBeca = (props) => {
    const estilo = {
        display: props.mostrar
    }

    return <>
        <div className="background-modal" style={estilo}>
            <div id="modal-beca">
                <div className="modal-header-beca">
                    <span className="btn-ocultar-modal btn-ocultar-beca" onClick={() => props.setMostrar("none")}>X</span>
                </div>
                <div className="modal-body">
                    <div className='modal-beca-titulo'>
                        <div className='foto-modal-beca'>
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className='header-body-modal-beca'>
                            <span className='titulo-beca-modal'>{props.beca?.titulo}</span>
                            <div className='tags-card-becas tags-modal-beca'>
                                {map(props.beca?.tags, (t, i) => <span key={11 + i}>{t}</span>)}
                            </div>
                        </div>
                    </div>

                    <div className='descripcion-beca-modal'>
                        {props.beca?.descripcion}
                    </div>
                </div>
                <div className='modal-footer modal-footer-beca'>
                    <div className='fecha-inicio-modal-beca'>
                        Desde:{new Date().toLocaleDateString()}
                    </div>
                    <div className='fecha-fin-modal-beca'>
                        Desde:{new Date().toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ModalBeca
