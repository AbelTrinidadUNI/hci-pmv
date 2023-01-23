import { find, map, remove } from 'lodash';
import React, { useEffect, useState } from 'react'

const CategoriaPregunta = (props) => {
    const [estilo, setEstilo] = useState({});
    const [select, setSelect] = useState(false);

    //recibe la categoria a agregar o eliminar
    const agregarCategoria = (cat) => {
        if (find(props.categoriasSeleccionadas, c => c === cat)) {
            console.log("se elimino")
            //elimina la categoria del array de categorias seleccionadas y se cambia el estado por el nuevo array
            remove(props.categoriasSeleccionadas, c => c === cat)
            props.addCategoria([...props.categoriasSeleccionadas]);
            //console.log(props.categoriasSeleccionadas)

            
        } else {
            console.log("se agrego")
            //se agrega el array a la lista de categorias seleccionadas
            const newList = [...props.categoriasSeleccionadas, cat];
            
            props.addCategoria(newList);
            //console.log(newList)
        }

    }


    useEffect(() => {
        if (select) {
            setEstilo({
                backgroundColor: "rgba(0, 136, 255, 1)",
                color: "white"
            })
        } else {
            setEstilo({
                backgroundColor: "rgb(233, 233, 233)",
                color: "black"
            });
        }
    }, [select]);



    return <>
        <span className='input-tag-pregunta' style={estilo} onClick={() => {
            /* props.click(props.categoria) */
            setSelect(!select);
            agregarCategoria(props.descripcion);

        }}>
            {props.descripcion}
        </span>
    </>
}

export default CategoriaPregunta