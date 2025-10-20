import { useNavigate } from 'react-router';
import './Transacciones.css';
import { useState } from 'react';

function Transacciones() {
  const navigate = useNavigate();
  const [tabActiva, setTabActiva] = useState('transferir');

  return (
    <div id="ContenedorTransacciones">
        <div id="Wrapper">
            <div id="SubContenedorTransacciones">
                <h1>TRANSACCIONES</h1>        
            </div>

            <div id="HacerTransaccion">
                <h2>Realizar Transacción</h2>
                <div id="SubHacerTransaccion">
                    <button 
                      className={tabActiva === 'transferir' ? 'activo' : ''}
                      onClick={() => setTabActiva('transferir')}
                    >
                      Transferir
                    </button>
                    <button 
                      className={tabActiva === 'depositar' ? 'activo' : ''}
                      onClick={() => setTabActiva('depositar')}
                    >
                      Depositar
                    </button>
                    <button 
                      className={tabActiva === 'retirar' ? 'activo' : ''}
                      onClick={() => setTabActiva('retirar')}
                    >
                      Retirar
                    </button>
                </div>

                {tabActiva === 'transferir' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta destino" />
                      <input type="text" placeholder="000-000000-00" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" />
                      <input type="text" placeholder="Monto" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="tipo de cuenta" />
                      <input type="text" placeholder="Moneda" />
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar">Confirmar Transferencia</button>
                    </div>
                  </div>
                )}

                {tabActiva === 'depositar' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de depósito" />
                      <input type="text" placeholder="000-000000-00" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" />
                      <input type="text" placeholder="Monto" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="tipo de cuenta" />
                      <input type="text" placeholder="Moneda" />
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar">Confirmar Depósito</button>
                    </div>
                  </div>
                )}

                {tabActiva === 'retirar' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de retiro" />
                      <input type="text" placeholder="000-000000-00" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" />
                      <input type="text" placeholder="Monto" />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="tipo de cuenta" />
                      <input type="text" placeholder="Moneda" />
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar">Confirmar Retiro</button>
                    </div>
                  </div>
                )}

                <div className="Actividad">
                  <h3>Actividad Reciente</h3>
                </div>
            </div>

            <div id="PanelDerecho">
                <div className="TarjetaSimple1">
                    <h3>Próximos Pagos</h3>
                </div>
                <div className="TarjetaSimple2">
                    <h3>Información rápida</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Transacciones;