import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/sidebar.tsx';
import './MainLayout.css'

function MainLayout() {
    return (
        <div id="layout">

            <Sidebar />

            <main className="content">
                <Outlet />
            </main>

        </div>
    );
}

export default MainLayout;