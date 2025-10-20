import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AccountManagement from './components/GestionCuentas/AccountManagement';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountManagement />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
