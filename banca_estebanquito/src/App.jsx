import './App.css'
import Login from './components/login/Login'
import RegistroUsuarios from './components/registro_usuarios/RegistroUsuarios'
import ReportesFinancieros from './components/reportes_financieros/ReportesFinancieros'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} /> 
        <Route path='/registro_usuarios' element={<RegistroUsuarios/>} />    
        <Route path='/reportes_financieros' element={<ReportesFinancieros/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App