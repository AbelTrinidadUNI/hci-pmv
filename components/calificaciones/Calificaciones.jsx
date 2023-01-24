import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import CardMateria from "../card-calificacion/CardMateria";
import Url from '../../common/Url';
import toast, {Toaster} from 'react-hot-toast';


const Calificaciones = () => {
    const [buscador, setBuscador] = useState("");
    const [materias, setMaterias] =  useState([]);
    const [toastLoading, setToastLoading] = useState(null);


    const isMounted = useRef(true);

    useEffect(() => {
      return () => {
        isMounted.current = false;
      }
    }, []);

    useEffect(() => {
      if(isMounted.current){
      const data = JSON.parse(localStorage.getItem('token'));
      setToastLoading(toast.loading("cargando..."));
      const header = new Headers();
      header.append("Authorization", `bearer ${data.token}`);
      header.append("Content-Type", "application/json");

      const requestOption = {
        method :'GET',
        headers : header,
        redirect :'follow'
      }

      fetch(`${Url()}/api/subjects/email/${data.email}`, requestOption)
        .then(r => r.json())
        .then(r => {
          
          setMaterias(r);
          toast.dismiss(toastLoading);
        })
        .catch(console.log)
      }
    }, [])

  

  return (
    <>
      <Toaster /> 
      <div id="lista-materias-calificaciones">
        <h2>Calificaciones</h2>
        <div id="buscador-materias">
            <input id="buscador-input" type="text" placeholder="Buscar..." onChange={(e) => setBuscador(e.target.value)}/>
        </div>

        <div className="listaMaterias">
            {materias.filter(x => x.name.startsWith(buscador))
            .map(m => <CardMateria 
              key={m.id} 
              nombreMateria={m.name} 
              pp = {m.pp}
              pf = {m.pf}
              score = {m.score}
              />)}
        </div>
      </div>
      
    </>
  );
};

export default Calificaciones;
