import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import RegistroUsuarios from './components/registro_usuarios/RegistroUsuarios'
import ReportesFinancieros from './components/reportes_financieros/ReportesFinancieros.jsx'
import GestionCuentas from './components/GestionCuentas/AccountManagement.jsx'
import Transacciones from './components/Transacciones/Transacciones.jsx'
import Prestamos from './components/Prestamos/Prestamos.jsx'



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro_usuarios" element={<RegistroUsuarios />} />
        <Route path="/reportes_financieros" element={<ReportesFinancieros />} />
        <Route path="/GestionCuentas" element={<GestionCuentas />} />
        <Route path='/Transacciones' element={<Transacciones />} />
        <Route path='/Prestamos' element={<Prestamos />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
