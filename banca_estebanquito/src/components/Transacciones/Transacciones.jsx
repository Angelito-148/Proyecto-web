//import { useNavigate } from 'react-router';
import './Transacciones.css';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

function Transacciones() {
  const [tabActiva, setTabActiva] = useState('transferir');
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [usuario_id, setUsuario_id] = useState("");
  const [monto, setMonto] = useState("");
  const [usuarioActual, setUsuarioActual] = useState(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      const userData = JSON.parse(userStorage);
      setUsuarioActual(userData);
      setUsuario_id(userData.id);
    }
  }, []);
  const hacerDeposito = async () => {
  const resp = await fetch("http://localhost:3000/transacciones/depositar", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
      id: usuario_id, 
      monto: monto})
  });
  if (!resp.ok) {
    console.log('Error al realizar depósito');
  }
  else {
    alert("Depósito realizado con éxito");
    setMonto("");
    return resp.json();
  }
}

const hacerRetiro = async () => {
  const resp = await fetch("http://localhost:3000/transacciones/retirar", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
      usuario_id: usuario_id, 
      monto: monto })
  });
  if (!resp.ok) {
    console.log('Error al realizar retiro'); 
  }
  else {
    alert("Retiro realizado con éxito");
    setMonto("");
    return resp.json();
  }
}

const hacerTransferencia = async () => {
  const resp = await fetch("http://localhost:3000/transacciones/transferir", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      cuenta_origen_id: usuario_id,
      cuenta_destino_id: cuentaDestino,
      monto: monto
    })
  });
  console.log("respuesta del metodo", resp);
  if (!resp.ok) {
    console.log('Error al realizar transferencia');
  }
  else {
    alert("Transferencia realizada con éxito");
    setMonto("");
    setCuentaDestino("");
    return resp.json();
  }
}

  return (
    <>
    <Navbar />
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
                      className={tabActiva === 'deposito' ? 'activo' : ''}
                      onClick={() => setTabActiva('deposito')}
                    >
                      Depositar
                    </button>
                    <button 
                      className={tabActiva === 'retiro' ? 'activo' : ''}
                      onClick={() => setTabActiva('retiro')}
                    >
                      Retirar
                    </button>
                </div>

                {tabActiva === 'transferir' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de origen" disabled />
                      <input type="text" disabled 
                      value={usuario_id}
                      onChange={(e) => setUsuario_id(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de destino" disabled />
                      <input type="text" placeholder="000-000000-00" 
                      value={cuentaDestino}
                      onChange={(e) => setCuentaDestino(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      >
                      <option value="" disabled>Tipo de Cuenta</option>
                      <option value="ahorros">ahorros</option>
                      <option value="corriente">corriente</option>
                      </select>
                      <input type="text" placeholder="Monto" 
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar" onClick={hacerTransferencia}>Confirmar Transferencia</button>
                    </div>
                  </div>
                )}

                {tabActiva === 'deposito' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de depósito" disabled />
                      <input type="text" disabled 
                      value={usuario_id}
                      onChange={(e) => setUsuario_id(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" 
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      >
                      <option value="" disabled>Tipo de Cuenta</option>
                      <option value="ahorros">ahorros</option>
                      <option value="corriente">corriente</option>
                      </select>
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar" onClick={hacerDeposito}>Confirmar Depósito</button>
                    </div>
                  </div>
                )}

                {tabActiva === 'retiro' && (
                  <div className="Formulario">
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de retiro" disabled />
                      <input type="text" disabled 
                      value={usuario_id}
                      onChange={(e) => setUsuario_id(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" 
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      >
                      <option value="" disabled>Tipo de Cuenta</option>
                      <option value="ahorros">ahorros</option>
                      <option value="corriente">corriente</option>
                      </select>
                    </div>
                    <div className="BotonConfirmar">
                      <button className="BtnConfirmar" onClick={hacerRetiro}>Confirmar Retiro</button>
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
    </>
  );
}

export default Transacciones;