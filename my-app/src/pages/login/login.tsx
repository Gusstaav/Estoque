import react from 'react'
import './login.css'
import logo from '../../img/logo-potato.png'

function Login(){
    return(
        <html>
        <div id='section-login'>
           <div id="container-login" className='container'>
                <img src={logo} id='logo-login' />
                    <h3 id='title'>Bem vindo</h3>
                        <div id='login-box'>
                            <label id='matricula-label'>Matricula:</label><input id='matricula-input' placeholder='Matricula' />
                            <label id='senha-label'>Senha:</label> <input id='senha-input' placeholder='Senha'/>
                            <button type="button" id='button-submit'>Enviar</button>
                            <p id="forgot-password">Esqueci minha <span id='password'>senha</span></p>
                        </div>
            </div> 
        </div>
        </html>
    )
}

export default Login