import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quienessomos from './pages/Quienessomos'
import Precios from './pages/Precios'
import Mapas from './pages/Mapas'
import Solicita from './pages/Solicita'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quienessomos" element={<Quienessomos />} />
        <Route path="/Precios" element={<Precios />} />
        <Route path="/Mapas" element={<Mapas />} />
        <Route path="/solicita" element={<Solicita />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
