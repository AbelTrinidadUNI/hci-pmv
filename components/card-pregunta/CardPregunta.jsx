import React from 'react'

const CardPregunta = props => {
    return <>
        <div className='card-pregunta' onClick={props.onClick}>
            <div className='foto-perfil'>
                <i className="bi bi-person-circle"></i>
            </div>
            <div className='txt-pregunta-card'>
                Lorem ipsum do asd  asd sd as dasd as das dasdas das asd asd as dasd as das dasdasas f sd fsd fsd sd sdsd dfdf s dflor sit  dconsectetur adipisicing elit. Sed, reprehenderit.
            </div>
        </div>
    </>
}

export default CardPregunta
