import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountManagement from './components/GestionCuentas/AccountManagement';
import React from 'react';

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
