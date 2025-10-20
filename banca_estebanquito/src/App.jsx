import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Transacciones from './components/Transacciones/Transacciones'
import Prestamos from './components/Prestamos/Prestamos'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Transacciones/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App

