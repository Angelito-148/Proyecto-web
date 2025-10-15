import './App.css'
import Login from './components/login/Login'
import RegistroUsuarios from './components/registro_usuarios/RegistroUsuarios'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} /> 
        <Route path='/registro_usuarios' element={<RegistroUsuarios/>} />     
      </Routes>
    </BrowserRouter>
  )
}

export default App