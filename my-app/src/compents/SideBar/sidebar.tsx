import { NavLink } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar" id='sidebar'>

            <p id='title-sidebar'>Potato</p>

            <nav id='menu-sidebar'>

                <NavLink id='options-sidebar' to="/home">
                    Início
                </NavLink>

                <NavLink id='options-sidebar' to="/estoque">
                    Estoque
                </NavLink>

                <NavLink id='options-sidebar' to="/produtos">
                    Separação
                </NavLink>
                
                <NavLink id='options-sidebar' to="/produtos">
                    Endereços
                </NavLink>

                <NavLink id='options-sidebar' to="/produtos">
                    Movimentação
                </NavLink>

                <NavLink id='options-sidebar' to="/produtos">
                    Ordens
                </NavLink>


                <NavLink id='options-sidebar' to="/usuarios">
                    Usuários
                </NavLink>

                <NavLink id='options-sidebar' to="/configuracoes">
                    Configurações
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;