import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Cabecera from '../cabecera/Cabecera'
import Contenido from '../contenido/contenido'
import Inicio from '../inicio/Inicio'
import Navbar from '../navbar/Navbar'
import ModalMenu from '../modal-menu/ModalMenu'

const Layout = () => {
  const [view, setView] = useState(<Inicio/>);
  const [showMenu, setShowMenu] = useState(false)
  
  return <>
      <Cabecera onClickMenu={()=>{setShowMenu(true)}}/>
      <Contenido view={view}/>
      <Navbar setView={setView}/>
      <ModalMenu view={showMenu} onClose={()=>{setShowMenu(false)}} onChangeView={setView}/>
    </>
}

export default Layout