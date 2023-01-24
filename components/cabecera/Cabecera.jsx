import React from "react";


const Cabecera = ({onClickMenu = ()=>{}}) => {
  return (
    <>
      <ul className="cabecera">
        <li>
          <i className="bi bi-text-left" onClick={onClickMenu}></i>
        </li>
        <li>
          <i className="bi bi-person-circle"></i>
        </li>
      </ul>
    </>
  );
};
export default Cabecera;
