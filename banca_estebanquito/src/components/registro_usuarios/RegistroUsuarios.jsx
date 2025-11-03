import React from "react";
import "./RegistroUsuarios.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';

 const [user,setUser] = useState([]);
 
  const createUser = async () => {
    // Lógica para obtener el usuario
    const res = await fetch('http://localhost:3000/usuarios',{
      method: 'POST',      
    })
    const data = await res.json();
    return data;
    
   
  }



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

          <input className="input" type="password" placeholder="Numero de Celular" />

          <select name="Tipo de Cuenta" className="input"> 
            <option value="" disabled selected >Tipo de Cuenta</option>
            <option value="ahorros">ahorros</option>
            <option value="corriente">corriente</option>
          </select>

          

          
          
          <Link to="/"><button className="button">Registrarse</button></Link>
          


      </div>
    </div>
  )
}

export default RegistroUsuarios;