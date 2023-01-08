import { map } from 'lodash'
import React from 'react'

const CardBeca = (props) => {
    return <>
        <div className='card-beca' onClick={() => props.click(props.idBeca)}>
            <div className='body-card-beca'>
                <div className='foto-perfil'>
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className='text-card-beca'>
                    <div className='titulo-card-beca'>
                        <p className='text-titulo-beca'>{props.titulo}</p>
                    </div>
                    <div className='tags-card-becas'>
                        {map(props.tags, (t, i) => <span key={ 11 + i}>{t}</span>)}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CardBeca
