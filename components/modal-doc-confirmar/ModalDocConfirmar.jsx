import React from 'react'

const ModalDocConfirmar = (props) => {
    const estilo = {
        display: props.view
    }
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
                            <tr className='fila-tabla-confirmacion'>
                                <td>Boleto Estudiantil</td>
                                <td>30.000</td>
                            </tr>
                            <tr className='fila-tabla-confirmacion'>
                                <td>Promedio</td>
                                <td>20.000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='fila-tabla-confirmacion'>
                                <td id='total-label'>Total</td>
                                <td id='total-monto'>50.000</td>
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
