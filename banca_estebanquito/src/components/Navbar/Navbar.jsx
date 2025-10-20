import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

    return (
        <header className='navBar'>
      <a href='' className='logo'>
        <img src="./public/Logo.jpg" alt="Logo" className='logo-img'/>

      </a>
      <nav className='nav-links'>
        <Link to="/GestionCuentas">Inicio</Link>
        <Link to="/Transacciones">Transacciones</Link>
        <Link to="/Prestamos">Solicitudes de préstamos</Link>
        <Link to="/reportes_financieros">Reportes financieros</Link>
        <button className='logout-button' onClick={handleLogout}>Cerrar sesión</button>
      </nav>
    </header>
  );
}
export default Navbar;