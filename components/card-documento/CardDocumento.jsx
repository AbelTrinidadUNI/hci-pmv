import React, { useEffect, useMemo, useState } from "react";

const CardDocumento = (props) => {
    const [seleccion, setSeleccion] = useState(false);
    useEffect(() => {
        props.addTotal(props.idDoc, props.precio, seleccion);
        if(props.reset){
            setSeleccion(false)
        }
    }, [seleccion, props.reset]);
    return (
        <>
            <div className="card-documento" onClick={() => {
                setSeleccion(!seleccion);
                }}>
                <div className="card-doc-header">
                    <span>{props.nombre}</span>
                    <span>{props.tiempo} dias</span>
                </div>
                <div className="card-doc-body">
                    <span>{props.precio} gs.</span>
                    <i className="bi bi-cart-plus cart-documento" style={{display: !seleccion ? "flex" : "none"}}></i>
                    <i className="bi bi-cart-check cart-documento" style={{display: seleccion ? "flex" : "none"}}></i> 
                </div>
            </div>
        </>
    );
}

export default CardDocumento;
