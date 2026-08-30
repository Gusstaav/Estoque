import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'
import Pilot from './pages/pilot/pilot.tsx'


function App() {

  return (
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pilot />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
