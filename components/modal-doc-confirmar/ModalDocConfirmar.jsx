import { map } from 'lodash'
import React from 'react'
import { useEffect } from 'react'

const ModalDocConfirmar = (props) => {
    const estilo = {
        display: props.view
    }

    useEffect(() => {
        console.log(props.seleccionados);
    },)
    return <>
        <div className="background-modal" style={estilo}>
            <div id="modal-conf-doc">
                <div className="modal-header" id='confirmacion-titulo'>
                    <h1>Confirmación</h1>
                </div>
                <div className="modal-body">
                    <table id='tabla-doc-conf'>
                        <thead>
                            <tr id='cabecera-tabla-doc'>
                                <th>Descripción</th>
                                <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>

                            {props.view === "flex" && map(props.docSeleccionados, (d) => <tr key={d.id} className='fila-tabla-confirmacion'>
                                <td>{d.nombre}</td>
                                <td>{d.precio}</td>
                            </tr>)}
                            

                        </tbody>
                        <tfoot>
                            <tr className='fila-tabla-confirmacion'>
                                <td id='total-label'>Total</td>
                                <td id='total-monto'>{props.total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="modal-footer">
                    <button className="cancelar" onClick={() => {
                        props.setView("none")
                    }}>Cancelar</button>
                    <button className="confirmar" onClick={() => { 
                        props.confirmar();
                        }}>Confirmar</button>
                </div>
            </div>
        </div>
    </>
}

export default ModalDocConfirmar
