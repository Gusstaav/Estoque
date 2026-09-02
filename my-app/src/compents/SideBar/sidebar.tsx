import { NavLink } from 'react-router-dom';
import IconMenu from '../../img/menu.png'
import './sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar" id='sidebar'>

            <p id='title-sidebar'>Potato</p>

            <img src={IconMenu} id='Icon-Menu'/> 
                 
            <nav id='menu-sidebar'>
                
                <p id='welcome-sidebar'>Bem vindo</p>
                <p id='welcome-sidebar-user'>"USER"</p>
                
                <NavLink id='options-sidebar-home' to="/home">
                    Início
                </NavLink>
                
                <div id='options-sidebar-estoque'>
                    <p>Estoque</p>
                        <NavLink id='picking' to="/conferencia">Conferencia</NavLink>
                        <NavLink id='picking' to="/picking">Inventario</NavLink>
                </div>

                <div id='options-sidebar-picking'>
                    <p>Picking</p>
                    <NavLink id='picking' to="/picking">Separação</NavLink>
                </div>

                <NavLink id='settings' to="/configuracoes">
                    Configurações
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;