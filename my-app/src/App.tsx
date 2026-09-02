import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'
import MainLayout from './compents/MainLayout/MainLayout.tsx';


function App() {

  return (
    <BrowserRouter>

            <Routes>

                {/* Área pública */}

                <Route path="/" element={<Login />} />


                {/* Área logada */}

                <Route element={<MainLayout />}>

                    <Route path="/home" element={<Home />} /> 
                    
                </Route>

            </Routes>

        </BrowserRouter>
  )
}

export default App
