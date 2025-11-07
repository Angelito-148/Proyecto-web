//import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Prestamos.css';
import { useState, useEffect } from 'react';

function Prestamos() {
    
    const [aceptoTerminos, setAceptoTerminos] = useState(false);
    const [plazo, setPlazo] = useState("");
    const [usuario_id, setUsuario_id] = useState("");
    const [monto, setMonto] = useState("");
    const [monto_simulador, setMonto_simulador] = useState("");
    const [plazo_simulador, setPlazo_simulador] = useState("");
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [pagoMensual, setPagoMensual] = useState("");
    const [totalInteres, setTotalInteres] = useState(""); 
    const [costoTotal, setCostoTotal] = useState("");
    
    useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
        const userData = JSON.parse(userStorage);
        setUsuarioActual(userData);
        setUsuario_id(userData.id);
        console.log("Usuario_id:", userData.id);
        }
    }, []);

    const solicitarPrestamo = async () => {
    const resp = await fetch("http://localhost:3000/prestamos/solicitud", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
        usuario_id: usuario_id, 
        monto,
        plazo})
    });
    if (!resp.ok) {
        console.log('Error al realizar depósito');
    }
    else {
        alert("Depósito realizado con éxito");
        setMonto("");
        setPlazo("");
        return resp.json();
    }
}

    const simularPrestamo = () => {
        const m = parseFloat(monto_simulador);
        const p = parseFloat(plazo_simulador);
        setPagoMensual((m / p).toFixed(2));
        setTotalInteres(((m / p) * 0.185).toFixed(2));
        setCostoTotal(((m + (m / p) * 0.185)).toFixed(2));
    }

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
                                <input type="text" placeholder='Indique el monto deseado' 
                                value={monto_simulador}
                                onChange={(e) => setMonto_simulador(e.target.value)}/>
                                <h5>Indique el importe deseado</h5>
                                <h4>Plazo de pago</h4>
                                <input type="text" placeholder='6, 12, 24, 36 meses' 
                                value={plazo_simulador}
                                onChange={(e) => setPlazo_simulador(e.target.value)}/>
                            </div>
                        </div>
                        <div className="PanelDerecho">
                            <div className="ListaInputsYLabels">
                                <label>Pago mensual
                                    =${pagoMensual}
                                </label>
                                <label>Total interés
                                    =${totalInteres}
                                </label>
                                <label>Costo total
                                    =${costoTotal}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="FilaInputsYLabels">
                            <button
                            className="BtnConfirmar"
                            onClick={simularPrestamo}
                            >
                            Simular préstamo
                            </button>
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
                            <input type="text" placeholder='Indique el valor del préstamo' 
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}/>
                        </div>
                        <div className="FilaInputsYLabels">
                            <label>Indique el plazo</label>
                            <input type="text" placeholder='6, 12, 24, 36 meses' 
                            value={plazo}
                            onChange={(e) => setPlazo(e.target.value)}/>
                        </div>
                        <div className="FilaInputsYLabels">
                            <label>
                            <input
                                type="checkbox"
                                id="terminos"
                                checked={aceptoTerminos}
                                onChange={(e) => setAceptoTerminos(e.target.checked)}
                            />
                            Acepto los términos y condiciones
                            </label>
                        </div>
                        <div className="FilaInputsYLabels">
                            <button
                            className="BtnConfirmar"
                            onClick={solicitarPrestamo}
                            disabled={!aceptoTerminos}
                            >
                            Enviar solicitud
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Prestamos;