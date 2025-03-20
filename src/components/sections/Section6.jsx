import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";

const Section6 = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };
  return (
    <div className="bg-banner text-white text-center sm:rounded-tr-[200px] rounded-tr-[100px]  mt-20 ">
      <div className="sombra sm:rounded-tr-[200px] rounded-tr-[100px] sm:p-12 p-3">
      <h1 className="sm:text-6xl text-4xl font-bold text-start  mb-7">¡Únete a <br className="sm:hidden"/> Megaexpress Mensajería!</h1>
       <p className="sm:text-2xl mb-5 text-lg text-start">Regístrate hoy y descubre la rapidez y <br className="sm:hidden"/>eficiencia de nuestros servicios de mensajería.</p>
        <div className="gap-4 flex">
            <button onClick={handleLoginOpen} className="bg-white text-[#000735] px-4 py-2 rounded-lg border-2 border-white hover:bg-[#000735] hover:text-white">Registrarse</button>
            <Link to="/Solicita">
            <button className="bg-transparent text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-blue-950">Solicita un domi</button>
            </Link>
        </div>
      </div>
      <Login isOpen={isLoginOpen} onClose={handleLoginClose} />
    </div>
  )
}

export default Section6