import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Cabecera from '../cabecera/Cabecera'
import Contenido from '../contenido/Contenido'
import Inicio from '../inicio/Inicio'
import Navbar from '../navbar/Navbar'
import ModalMenu from '../modal-menu/ModalMenu'

const Layout = () => {

  
  return <>
      <Cabecera/>
      <Contenido/>
      <Navbar/>
      <ModalMenu />
    </>
}

export default Layout