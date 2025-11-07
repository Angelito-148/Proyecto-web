import React from 'react'
import { Link } from 'react-router-dom';
import Withdrawal from '../../assets/icons/Withdrawal.svg';
import Income from '../../assets/icons/income.svg';
import Loan from "../../assets/icons/loan.svg";
import userIcon from '../../assets/icons/user.svg';
import "./ReportesFinancieros.css"
import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';


function ReportesFinancieros() {

        const [usuario_id, setUsuario_id] = useState("");
        const [usuarioActual, setUsuarioActual] = useState(null);
        const [ingresos, setIngresos] = useState([]);
        const [egresos, setEgresos] = useState([]);
        const [deudas,  setDeudas]  = useState([]);

        useEffect(() => {
        const userStorage = localStorage.getItem('user');
        if (userStorage) {
            const userData = JSON.parse(userStorage);
            setUsuarioActual(userData);
            setUsuario_id(userData.id);
            }
        }, []);

        const reporteIngresos = async () => {
        const resp = await fetch("http://localhost:3000/ingresos", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
            usuario_id
        })
        }); 
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
        if (!resp.ok) {
            console.log('Error al realizar la solicitud');
        }
        const data = await resp.json();      
        setEgresos(data.egresos ?? []);
    }

    const reporteDeudas= async () => {
        const resp = await fetch("http://localhost:3000/deudas", {
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
        setDeudas(data.deudas ?? []);
    }

    useEffect(() => {
        if (usuario_id) {
            console.log('Cargando reportes para', usuario_id);
            reporteIngresos();
            reporteEgresos();
            reporteDeudas();
        } else {
            console.log('Aún no hay usuario_id');
        }
    }, [usuario_id]);

    const userInfo = JSON.parse(localStorage.getItem("user"))

  return (
    <>
    <Navbar />
    <div id="reportesMainContainer">     
        <div id='reportesContainer'>
            <h1>Reportes Financieros</h1>
        
            <div className='infoContainer'>                    
                <div className='cajaInfo'>  
                    <div><img id='userIcon' src={userIcon}  /></div> 
                    <div>
                        <p>Usuario: {userInfo?.nombre}</p>
                        <p>Cuenta: {userInfo?.id}</p>
                        <p>Balance Actual: {userInfo?.saldo}</p>
                    </div>                
                </div>
            </div>

            <div className='infoContainer'>
                <div>
                    <h2><img className="icon" src={Income} alt="" /> Historico de Ingresos</h2>
                    <div className='caja'>
                        {ingresos.length > 0 && (
                                <table style={{ width: '100%', marginTop: 10, fontSize: 12 }}>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Tipo</th>
                                            <th>Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ingresos.map((i, idx) => (
                                            <tr key={idx}>
                                                <td>{i.fecha}</td>
                                                <td>{i.tipo}</td>
                                                <td>${i.monto}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>
                </div>
                
                <div> 
                    <h2><img className="icon"src={Withdrawal}/> Historico de Egresos</h2>
                    <div className='caja'>
                        {egresos.length > 0 && (
                                <table style={{ width: '100%', marginTop: 10, fontSize: 12 }}>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Tipo</th>
                                            <th>Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {egresos.map((e, idx) => (
                                            <tr key={idx}>
                                                <td>{e.fecha}</td>
                                                <td>{e.tipo}</td>
                                                <td>${e.monto}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>     
                </div>     

                    <div>
                        <h2><img className="icon" src={Loan} alt="" /> Deudas Pendientes</h2>
                    <div className='caja'>
                        {deudas.length > 0 && (
                                <table style={{ width: '100%', marginTop: 10, fontSize: 12 }}>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Tipo</th>
                                            <th>Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deudas.map((d, idx) => (
                                            <tr key={idx}>
                                                <td>{d.fecha}</td>
                                                <td>{d.tipo}</td>
                                                <td>${d.monto}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>
                </div>  
            </div>    
        </div>
    </div>
    </>
    )
}

export default ReportesFinancieros;
