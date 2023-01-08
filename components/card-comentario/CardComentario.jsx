import React from 'react'

const CardComentario = () => {
    return <>
        <div className='card-comentario-pregunta'>
            <div className='comentario'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maiores, perferendis omnis rem provident commodi deleniti at ratione a iste, aliquid accusamus quas magni molestiae.</span>
            </div>
            <div className='footer-card-comentario'>
                <span className='fecha-comentario'>{new Date().toDateString()}</span>
                <div className='comentador-pregunta'>
                    <span className='nombre-comentador'>Pedro Perez</span>
                    <i className="bi bi-person-circle"></i>
                </div>
            </div>
        </div>
    </>
}

export default CardComentario
