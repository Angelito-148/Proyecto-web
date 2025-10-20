import React from 'react'
import { Link } from 'react-router';
import Withdrawal from '../../assets/icons/Withdrawal.svg';
import Income from '../../assets/icons/income.svg';
import Loan from "../../assets/icons/loan.svg";
import userIcon from '../../assets/icons/user.svg';
import "./ReportesFinancieros.css"


export default function ReportesFinancieros() {
  return (
    <div id="reportesMainContainer">
        
        <div id='reportesContainer'>

            <h1>Reportes Financieros</h1>
        
            <div className='infoContainer'>            
                
                <div className='cajaInfo'>  

                    <div><img id='userIcon' src={userIcon}  /></div> 
                    <div>
                        <p>Usuario:</p>
                        <p>Cuenta:</p>
                        <p>Balance Actual:</p>
                    </div>                
                
                </div>


            </div>

            <div className='infoContainer'>
                <div>
                    <h2><img className="icon" src={Income} alt="" /> Historico de Ingresos</h2>
                    <div className='caja'>
                        
                    </div>
                </div>
                
                <div> 
                    <h2><img className="icon"src={Withdrawal}/> Historico de Egresos</h2>
                    <div className='caja'></div>
                </div>     

                    <div>
                        <h2><img className="icon" src={Loan} alt="" /> Deudas Pendientes</h2>
                    <div className='caja'></div>
                </div>  

            </div>
                
    
                <div className='infoContainer'>
                
                </div>
            
            <Link to="/"><button id='buttons'>Volver al Inicio</button></Link>
        

        </div>
    </div>
    )
}
