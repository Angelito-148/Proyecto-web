import React from "react";
import "./RegistroUsuarios.css";


function RegistroUsuarios() {
  return (


    <div className="registro-container">
      <div className="registro-box">
        <h2 className="titulo">Crear Cuenta</h2>
        <p className="subtitulo">Regístrate para continuar</p>

        <input type="text" placeholder="Nombre de Usuario" />
        <input type="email" placeholder="Correo Electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar Contraseña" />

        <button>Registrarse</button>

        </div>
     </div>
  )
}

export default RegistroUsuarios;