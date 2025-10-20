import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AccountManagement from './components/GestionCuentas/AccountManagement';
import React from 'react';
import Login from './components/login/Login'
import RegistroUsuarios from './components/registro_usuarios/RegistroUsuarios'
import ReportesFinancieros from './components/reportes_financieros/ReportesFinancieros'


import Transacciones from './components/Transacciones/Transacciones'
import Prestamos from './components/Prestamos/Prestamos'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountManagement />} />
      </Routes>
    </Router>
  )
}
export default App
