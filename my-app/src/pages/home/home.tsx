import react from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'


function Home(){
    return(
        <section id='section-home'>
            <div id="container-home">
                <NavLink id='link-home' to="/conference">
                    <div id="box-info-home">
                        <p id='title-conference'>Pendente de conferencia</p>
                        <p id='total-itens-pendente-conference'>750</p>
                    </div>
                </NavLink>     
                
                <NavLink id='link-home' to="/guarda">
                    <div id="box-info-home">
                        <p id='title-guarda'>Pendente de guarda</p>
                        <p id='total-itens-pendente-guarda'>750</p>
                    </div>
                </NavLink>
                
                <NavLink id='link-home' to="/picking">
                    <div id="box-info-home">
                        <p id='title-picking'>Pendente de separação</p>
                        <p id='total-itens-pendente-picking'>750</p>
                    </div>
                </NavLink>

            </div>
        </section>
    
    )
}

export default Home