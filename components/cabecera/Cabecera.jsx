import React, { useContext } from "react";
import PaginasContext from "../../contexts/PaginasContext";


const Cabecera = ({}) => {
  const {setShowMenuModal} = useContext(PaginasContext);
  return (
    <>
      <ul className="cabecera">
        <li>
          <i className="bi bi-text-left" onClick={()=>{setShowMenuModal(true)}}></i>
        </li>
        <li>
          <i className="bi bi-person-circle"></i>
        </li>
      </ul>
    </>
  );
};
export default Cabecera;
