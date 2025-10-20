import React from "react";
import "./RegistroUsuarios.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from 'react-router-dom';

function RegistroUsuarios() {
  return (

    <div className="registro-container">
      
      <div className="registro-box">

        
          <Link to="/"><img className="back-arrow" src={backArrow}/></Link> 

          <h2 className="titulo">Crear Cuenta</h2>

          <p className="subtitulo">Completa tus datos para continuar</p>

          <input className="input" type="text" placeholder="Nombre de Usuario" />

          <input className="input" type="email" placeholder="Correo Electrónico" />

          <input className="input" type="password" placeholder="Contraseña" />

          <input className="input" type="password" placeholder="Confirmar Contraseña" />

          <Link to="/"><button className="button">Registrarse</button></Link>
          


      </div>
    </div>
  )
}

export default RegistroUsuarios;