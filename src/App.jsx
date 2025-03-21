import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Quienessomos from './pages/Quienessomos'
import Precios from './pages/Precios'
import Mapas from './pages/Mapas'
import Solicita from './pages/Solicita'
import Cataclientes from './pages/Cataclientes'
import Pqr from './pages/Pqr'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quienessomos" element={<Quienessomos />} />
        <Route path="/Precios" element={<Precios />} />
        <Route path="/Mapas" element={<Mapas />} />
        <Route path="/solicita" element={<Solicita />} />
        <Route path="/cataclientes" element={<Cataclientes />} />
        <Route path="/pqr" element={<Pqr />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
