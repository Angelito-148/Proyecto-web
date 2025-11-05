//import { useNavigate } from 'react-router';
import './Transacciones.css';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const hacerDeposito = async (usuarioId, monto) => {
  const resp = await fetch("http://localhost:3000/transacciones", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario_id: Number(usuarioId), monto: Number(monto) })
  });
  if (!resp.ok) {
    console.log('Error al realizar depósito');
  }
  return resp.json();
}

const hacerRetiro = async (usuarioId, monto) => {
  const resp = await fetch("http://localhost:3000/transacciones", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario_id: Number(usuarioId), monto: Number(monto) })
  });
  if (!resp.ok) {
    console.log('Error al realizar retiro');
  }
  return resp.json();
}

const hacerTransferencia = async (origenId, destinoId, monto) => {
  const resp = await fetch("http://localhost:3000/transacciones", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      origen_id: Number(origenId),
      destino_id: Number(destinoId),
      monto: Number(monto)
    })
  });
  if (!resp.ok) {
    console.log('Error al realizar transferencia');
  }
  return resp.json();
}


function Transacciones() {
  //const navigate = useNavigate();
  const [tabActiva, setTabActiva] = useState('transferir');
  // const [cuentaOrigen, setCuentaOrigen] = useState("");
  // const [cuentaDestino, setCuentaDestino] = useState("");
  // const [tipoCuenta, setTipoCuenta] = useState("");
  // const [monto, setMonto] = useState("");
  // const [mensaje, setMensaje] = useState("");
  // const [usuarioActual, setUsuarioActual] = useState(null);
  // const fechaActual = new Date().toISOString().split('T')[0];

  // useEffect(() => {
  //   const userStorage = localStorage.getItem('user');
  //   if (userStorage) {
  //     const userData = JSON.parse(userStorage);
  //     setUsuarioActual(userData);
  //     setCuentaOrigen(userData.numero_cuenta);
  //   }
  // }, []);

  // const crearTransaccion = async () => {
  //   setMensaje("");
  //   if (!cuentaOrigen || !cuentaDestino || !tipoCuenta || !monto) {
  //     setMensaje("Completa todos los campos");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("http://localhost:3000/transacciones", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         cuenta_origen_id: cuentaOrigen,
  //         cuenta_destino_id: null,
  //         tipo_cuenta: tipoCuenta,
  //         tipo: tabActiva,
  //         monto: parseFloat(monto),
  //         fecha: fechaActual
  //       })
  //     });
      
  //     const data = await res.json();

  //     if (!res.ok) {
  //       setMensaje(data?.error || "No se pudo realizar la transacción");
  //       return;
  //     }

  //     setMensaje("Transacción realizada correctamente");

  //     setCuentaDestino("");
  //     setTipoCuenta("");
  //     setMonto("");

  //   } catch (err) {
  //       console.error("Error en createTransaccion:", err.message);
  //       err.status(500).json({ error: err.message });
  //   }
  // };

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
                      // value={cuentaOrigen}
                      // onChange={(e) => setCuentaOrigen(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Cuenta de destino" disabled />
                      <input type="text" placeholder="000-000000-00" 
                      // value={cuentaDestino}
                      // onChange={(e) => setCuentaDestino(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      // value={tipoCuenta}
                      // onChange={(e) => setTipoCuenta(e.target.value)}
                      >
                      <option value="" disabled>Tipo de Cuenta</option>
                      <option value="ahorros">ahorros</option>
                      <option value="corriente">corriente</option>
                      </select>
                      <input type="text" placeholder="Monto" 
                      // value={monto}
                      // onChange={(e) => setMonto(e.target.value)}
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
                      // value={cuentaOrigen}
                      // onChange={(e) => setCuentaOrigen(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" 
                      // value={monto}
                      // onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      // value={tipoCuenta}
                      // onChange={(e) => setTipoCuenta(e.target.value)}
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
                      // value={cuentaOrigen}
                      // onChange={(e) => setCuentaOrigen(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <input type="text" placeholder="Monto" 
                      // value={monto}
                      // onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    <div className="FilaInputs">
                      <select
                      name="tipo_cuenta"
                      className="FilaInputs"
                      // value={tipoCuenta}
                      // onChange={(e) => setTipoCuenta(e.target.value)}
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