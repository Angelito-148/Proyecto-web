import React from "react";
import "./RegistroUsuarios.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function RegistroUsuarios() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const crearUsuario = async () => {
    setMensaje("");
    if (!nombre || !email || !contraseña || !numeroCuenta || !tipoCuenta) {
      setMensaje("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          email,
          contraseña,
          numero_cuenta: numeroCuenta,
          tipo_cuenta: tipoCuenta,
          saldo: 0.00 
        })
      });
      
      const data = await res.json();

      if (!res.ok) {
        setMensaje(data?.error || "No se pudo registrar");
        return;
      }

      setMensaje("Usuario registrado correctamente");

      setNombre(""); setEmail(""); setContraseña("");
      setNumeroCuenta(""); setTipoCuenta("");

      setTimeout(() => navigate("/"), 2000);

    } catch (err) {
      console.error(err)
    }
  };
  return (

    <div className="registro-container">
      
      <div className="registro-box">

        
          <Link to="/"><img className="back-arrow" src={backArrow}/></Link> 

          <h2 className="titulo">Crear Cuenta</h2>

          <p className="subtitulo">Completa tus datos para continuar</p>

          <input
          className="input"
          type="text"
          placeholder="Nombre de Usuario"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="input"
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Número de cuenta (puede ser tu celular)"
          value={numeroCuenta}
          onChange={(e) => setNumeroCuenta(e.target.value)}
        />

          <select
          name="tipo_cuenta"
          className="input"
          value={tipoCuenta}
          onChange={(e) => setTipoCuenta(e.target.value)}
          >
          <option value="" disabled>Tipo de Cuenta</option>
          <option value="ahorros">ahorros</option>
          <option value="corriente">corriente</option>
          </select>

          <button className="button" onClick={crearUsuario}>Registrarse</button>
          
          {mensaje && <p style={{ marginTop: 12 }}>{mensaje}</p>}
      </div>
    </div>
  )
}

export default RegistroUsuarios;