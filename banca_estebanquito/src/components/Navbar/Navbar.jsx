import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <header className='navBar'>
      <a href='' className='logo'>
        <img src="./public/Logo.jpg" alt="Logo" className='logo-img'/>

      </a>
      <nav className='nav-links'>
        <Link to="/">Inicio</Link>
        <Link to="/about">Transacciones</Link>
        <Link to="/services">Solicitudes de préstamos</Link>
        <Link to="/contact">Reportes financieros</Link>
        <button className='logout-button' onClick={handleLogout}>Cerrar sesión</button>
      </nav>
    </header>
  );
}
export default Navbar;