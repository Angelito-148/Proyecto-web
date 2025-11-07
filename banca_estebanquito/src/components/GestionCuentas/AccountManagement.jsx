// import React, { useState, useEffect } from 'react';
import './AccountManagement.css';
import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';

function AccountManagement() {

          const [usuario_id, setUsuario_id] = useState("");
          const [usuarioActual, setUsuarioActual] = useState(null);
          const [ingresos, setIngresos] = useState([]);
          const [egresos, setEgresos] = useState([]);
          const [saldo, setSaldo] = useState();
          const [transaccionesOrdenadas, setTransaccionesOrdenadas] = useState([]);
  
          useEffect(() => {
          const userStorage = localStorage.getItem('user');
          if (userStorage) {
              const userData = JSON.parse(userStorage);
              setUsuarioActual(userData);
              setUsuario_id(userData.id);
              setSaldo(userData.saldo);
              }
          }, []);

          useEffect(() => {
            if (usuario_id) {
                console.log('Cargando reportes para', usuario_id);
                reporteIngresos();
                reporteEgresos();
                Saldo();
            } else {
                console.log('Aún no hay usuario_id');
            }
          }, [usuario_id]);

          useEffect(() => {
            const combinadas = [...ingresos, ...egresos];
            combinadas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            setTransaccionesOrdenadas(combinadas);
            if (usuario_id) {
              Saldo();
            }
          }, [ingresos, egresos]);
          
        const Saldo = async () => {
            try {
              const resp = await fetch('http://localhost:3000/saldo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usuario_id })
              });
              if (!resp.ok) {
                console.error('No se pudo obtener el saldo');
                return;
              }
              const data = await resp.json();
              const nuevoSaldo = data.saldo ?? 0;
              setSaldo(nuevoSaldo);

              const userStorage = localStorage.getItem('user');
              if (userStorage) {
                const userData = JSON.parse(userStorage);
                userData.saldo = nuevoSaldo;
                localStorage.setItem('user', JSON.stringify(userData));
              }
            } catch (err) {
              console.error('Error al obtener saldo:', err);
            }
          };

          const reporteIngresos = async () => {
          const resp = await fetch("http://localhost:3000/ingresos", {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ 
              usuario_id
          })
          });
          console.log(resp);  
          if (!resp.ok) {
              console.log('Error al realizar la solicitud');
          }
          const data = await resp.json();     
          setIngresos(data.ingresos ?? []);
      }
  
      const reporteEgresos= async () => {
          const resp = await fetch("http://localhost:3000/egresos", {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ 
              usuario_id
          })
          });
          console.log(resp);  
          if (!resp.ok) {
              console.log('Error al realizar la solicitud');
          }
          const data = await resp.json();  
          setEgresos(data.egresos ?? []);
      }  

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
          <li><strong>Número de cuenta:</strong> {userInfo?.id}</li>
          <li><strong>Tipo de cuenta:</strong> {userInfo?.tipo_cuenta}</li>
        </ul>
      </div>

      <div className="balance">
        <h2>Saldo actual</h2>
        <p>${saldo}</p>
      </div>
      <div className="transaction">
        <h2>Historial de transacciones</h2>
        <table style={{ width: '100%', marginTop: 10, fontSize: 12 }}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Monto</th>
          </tr>
        </thead>
          <tbody>
              {transaccionesOrdenadas.map((t, idx) => (
              <tr key={idx}>
                <td>{t.fecha}</td>
                <td>{t.tipo}</td>
              <td>${t.monto}</td>
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