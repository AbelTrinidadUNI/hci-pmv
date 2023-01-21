import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Cabecera from '../cabecera/Cabecera'
import Contenido from '../contenido/contenido'
import Inicio from '../inicio/Inicio'
import Navbar from '../navbar/Navbar'

const Layout = () => {

  const [view, setView] = useState(<Inicio />);

  return <>
      <Cabecera/>
      <Contenido view={view}/>
      <Navbar setView={setView} />
    </>
}

export default Layout
