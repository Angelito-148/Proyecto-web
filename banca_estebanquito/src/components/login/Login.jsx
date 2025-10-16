import React from 'react'
import "./Login.css"
import loginIcon from "../../assets/icons/login.svg"
import loginVideo from '../../assets/videos/login.mp4';
import { useState } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
//props es un objeto que contiene todas las propiedades que se le pasan al componente desde su componente padre



export default function Login() {
const navigate=useNavigate();
const [campo,setcampo]=useState("");


const validateUser=()=>{
    alert("Hola tu nombre es " + campo);
    if(campo == "Juan"){
        navigate("/dashboard",{state:{nombreUsuario:{campo}}});
        
    }else{
       alert("Usuario Incorrecto");
    }

    
}

  return (

    <div id='fondoLogin'>
       
       <video id="videoFondo"  src={loginVideo} autoPlay loop muted></video>

      <div id='ContenedorLogin'>

          <img id="loginIcon" src={loginIcon} alt="" />
          <h1 className='text'>Login</h1>

          <input type="text"
          value={campo} 
          onChange={(e)=>setcampo(e.target.value)} 
          className='inputLogin' 
          placeholder='Nombre Usuario'/>  

          <input type="password"         
          className='inputLogin'         
          placeholder='Contraseña'/>
          
          <button id='button'
          onClick={validateUser}>Iniciar Sesion</button>        
          
          <p>¿Todavía no formas parte? <Link to="/registro_usuarios">¡Únete ahora!</Link></p>
          



      </div>
    </div>

   
  )
}
