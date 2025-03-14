import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quienessomos from './pages/Quienessomos'
import Precios from './pages/Precios'
import Mapas from './pages/Mapas'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quienessomos" element={<Quienessomos />} />
        <Route path="/Precios" element={<Precios />} />
        <Route path="/Mapas" element={<Mapas />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
