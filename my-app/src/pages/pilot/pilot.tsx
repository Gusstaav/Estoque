import './pilot.css'
import logo from '../../img/logo-potato.png'
import { Link } from 'react-router-dom'

function Pilot(){
    return(
        <html>
        <div id='section-pilot'>
            <div id='container-pilot'>
                <div id='welcome-container-pilot'>
                    <img id='logo-pilot' src={logo}/>
                        <p id='welcome-pilot'>Bem vindo ao Potato</p>
                </div>
                    <div id='container-choice-pilot'>
                        <h3 id='choice-pilot'>Escolha a forma de login que será utilizada</h3>
                            <div id="Manager-pilot" className='container'>
                                <Link id='link-pilot' to='/login'>Gerente</Link>
                            </div> 
                                <div id="Employee-pilot" className='container'>
                                    <Link id='link-pilot' to='/login'>Funcionario</Link>
                                </div> 
                </div>
            </div>
        </div>
        </html>
    )
}

export default Pilot