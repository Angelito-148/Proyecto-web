//import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Prestamos.css';
//import { useState } from 'react';

function Prestamos() {
    //const navigate = useNavigate();
    //const navigate = useNavigate();

    return(
        <>
        <Navbar />
        <div id="ContenedorPrestamos">
            <div id="Wrapper">
                <div id="SubContenedorPrestamos">
                    <h1>Préstamos</h1>  
                </div>

                <div id="SimuladorPrestamos">
                    <h2>Simulador de Préstamo</h2>
                    <div className="Panel1">
                        <div className="PanelIzquierdo">
                            <div className="ListaInputsYLabels">
                                <input type="text" placeholder='Seleccione el monto deseado' />
                                <h5>seleccione el importe deseado</h5>
                                <input type="text" placeholder='Barrita de monto' />
                                <h4>Plazo de pago</h4>
                                <input type="text" placeholder='6, 12, 24, 36 meses' />
                            </div>
                        </div>
                        <div className="PanelDerecho">
                            <div className="ListaInputsYLabels">
                                <label>Pago mensual</label>
                                <label>Total interés</label>
                                <label>Costo total</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="SolicitarPrestamos">
                    <h2>Solicitar Préstamo</h2>
                    <div className="Panel2">
                        <div className="FilaInputsYLabels">
                            <h4>Datos para la solicitud del préstamo</h4>
                        </div>
                        <div className="FilaInputsYLabels">
                            <label>Monto del préstamo</label>
                            <input type="text" placeholder='Cuenta actual' />
                        </div>
                        <div className="FilaInputsYLabels">
                            <label>Motivo del préstamo</label>
                            <input type="text" placeholder='Describa brevemente' />
                        </div>
                        <div className="FilaInputsYLabels">
                            <input type="text" placeholder='Acepto los términos y condiciones' />
                        </div>
                        <div className="FilaInputsYLabels">
                            <button className="BtnConfirmar">Enviar solicitud</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Prestamos;