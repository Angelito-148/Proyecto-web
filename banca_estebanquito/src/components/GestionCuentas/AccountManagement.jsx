// import React, { useState, useEffect } from 'react';
import './AccountManagement.css';
import Navbar from '../Navbar/Navbar';


function AccountManagement() {



    const userInfo = JSON.parse(localStorage.getItem("user"))

  return (
    <>
    <Navbar />
    <div className="accountContainer">

      <div className="profile">
        <h2>Detalles del perfil</h2>
        <ul>
          <li><strong>Nombre:</strong> {userInfo?.nombre}</li>
          <li><strong>Email:</strong> {userInfo?.email}</li>
          <li><strong>Número de cuenta:</strong> {userInfo?.numero_cuenta}</li>
          <li><strong>Tipo de cuenta:</strong> {userInfo?.tipo_cuenta}</li>
        </ul>
      </div>

      <div className="balance">
        <h2>Saldo actual</h2>
        <p>${userInfo?.saldo}</p>
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
            {/* {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.tipo}</td>
                <td>${tx.monto.toFixed(2)}</td>
                <td>{tx.fecha}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default AccountManagement;