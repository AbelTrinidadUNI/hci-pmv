import React, { useEffect, useRef, useState } from 'react'
import CardBeca from '../card-beca/CardBeca'
import ModalBeca from '../modal-beca/ModalBeca'
import toast, { Toaster } from 'react-hot-toast';
import Url from '../../common/Url';

const Becas = () => {
    const [becas, setBecas] = useState([]);
    const [modal, setModal] = useState("none");
    const [toastLoading, setToastLoading] = useState(null);
    const [becaSelecionada, setBecaSeleccionada] = useState(null);
    const isMounted = useRef(true);


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        if (isMounted.current) {
            const data = JSON.parse(localStorage.getItem('token'));
            setToastLoading(toast.loading("cargando..."));
            const header = new Headers();
            header.append("Authorization", `bearer ${data.token}`);
            header.append("Content-Type", "application/json");

            const requestOption = {
                method: 'GET',
                headers: header,
                redirect: 'follow'
            }

            fetch(`${Url()}/api/becas`, requestOption)
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    setBecas(r);
                    toast.dismiss(toastLoading);
                })
                .catch(console.log)
        }
    }, [])

    const seleccionarBeca = (idBeca) => {
        setBecaSeleccionada(becas.filter(b => b.id === idBeca)[0]);
        setModal("flex");
    };



    return <>

        <div>
            <Toaster />

            <div id='becas'>

                <div id='becas-titulo'>
                    <h2>Becas</h2>
                </div>
                <div id='lista-becas'>
                    {becas.map(b => <CardBeca key={b.id} idBeca={b.id} titulo={b.nombreBeca} tags={b.tags} click={seleccionarBeca} />)}
                </div>
                <ModalBeca mostrar={modal} setMostrar={setModal} beca={becaSelecionada} />
            </div>
        </div>

        </>
    }

export default Becas;
