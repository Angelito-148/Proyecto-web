import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
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

