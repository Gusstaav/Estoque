import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import logo from '../../img/logo-potato.png'
import users from './usertex.json'



function Login(){

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    function Authenticator(){
        
        const usuario = users.find(
            (user) =>
                user.registration === matricula &&
                user.password === senha
        );

       if (usuario) {

            console.log('Usuário encontrado:', usuario);

            navigate('/home');

        } else {

            alert('Matrícula ou senha incorreta!');

        }
    }
    
    return(
        <div id='section-login'>
           <div id="container-login" className='container'>
                <img src={logo} id='logo-login' />
                    <h3 id='title'>Bem vindo</h3>
                        <div id='login-box'>
                            <label id='matricula-label'>Matricula:</label>
                            <input id='matricula-input' placeholder='Matricula' value={matricula}  onChange={(e) => setMatricula(e.target.value)}/>
                            
                            <label id='senha-label'>Senha:</label> 
                            <input type='password' id='senha-input' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                            
                            <button type="button" id='button-submit' onClick={Authenticator}>Enviar</button>
                            <p id="forgot-password">Esqueci minha <span id='password'>senha</span></p>
                        </div>
            </div> 
        </div>
    )
}

export default Login