import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homee from './components/Homee'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
