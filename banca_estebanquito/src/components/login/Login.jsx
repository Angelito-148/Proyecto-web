import React from 'react'
import "./Login.css"
import loginIcon from "../../assets/icons/login.svg"
import loginVideo from '../../assets/videos/login.mp4';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';



export default function Login() {

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [contraseña, setContraseña] = useState("");


  const validateUser = async () => {
    try {
      const data = await getUser();
      const foundUser = data.find(user => 
        user.id === id && user.contraseña === contraseña
      );
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        navigate("/GestionCuentas");
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    } catch (err) {
      console.error("Error al validar el usuario:", err);
    }
  }

  const [user,setUser] = useState([]);
 
  const getUser = async () => {
    const res = await fetch('http://localhost:3000/usuarios',{
      method: 'GET', 
    })
    const data = await res.json();
    return data;
  }
 
  return (
    <div id='fondoLogin'>  
      <video id="videoFondo"  src={loginVideo} autoPlay loop muted></video>

      <div id='ContenedorLogin'>

          <img id="loginIcon" src={loginIcon} alt="" />
          <h1 className='text'>Login</h1>

          <input type="text"
          value={id} 
          onChange={(e)=>setId(e.target.value)} 
          className='inputLogin' 
          placeholder='Numero de cuenta'/> 

          <input type="password"
          value={contraseña}
          onChange={(e)=>setContraseña(e.target.value)}
          className='inputLogin'
          placeholder='Contraseña'/>
          
          <button id='button' onClick={validateUser}>Iniciar sesion</button>        

          <p>¿Todavía no formas parte? <Link to="/registro_usuarios">¡Registrate ahora!</Link></p>

      </div>
    </div>

   
  )
}
