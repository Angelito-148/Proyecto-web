import React, { useState, useEffect } from 'react';
import './AccountManagement.css';
import Navbar from '../GestionCuentas/Navbar';


function AccountManagement() {

  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    setUser({
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      numero_cuenta: '1234567890',
      tipo: 'ahorros',
      saldo: 1500.50
    });
    setTransactions([
      { tipo: 'depósito', monto: 500, fecha: '2023-10-01' },
      { tipo: 'retiro', monto: -200, fecha: '2023-10-05' },
      { tipo: 'transferencia', monto: -100, fecha: '2023-10-10' }
    ]);
  }, []);


    

  return (
    <>
    <Navbar />
    <div className="accountContainer">

      <div className="profile">
        <h2>Detalles del perfil</h2>
        <ul>
          <li><strong>Nombre:</strong> {user.nombre}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Número de cuenta:</strong> {user.numero_cuenta}</li>
          <li><strong>Tipo de cuenta:</strong> {user.tipo}</li>
        </ul>
      </div>

      <div className="balance">
        <h2>Saldo actual</h2>
        <p>${user.saldo ? user.saldo.toFixed(2) : "0.00"}</p>
      </div>
      <div className="transaction">
        <h2>Historial de transacciones</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.tipo}</td>
                <td>${tx.monto.toFixed(2)}</td>
                <td>{tx.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default AccountManagement;