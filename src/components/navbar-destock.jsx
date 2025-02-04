import logo from "../assets/img/logo.png";
import { HiMenu } from "react-icons/hi";
function NavbarDestock() {
  return (
    <div className="navbar bg-[#000735] sm:h-20 h-20 flex justify-between items-center px-3 sm:px-14 sm:rounded-b-[30px] rounded-b-2xl ">
      <div className="flex justify-around gap-40 items-center sm:gap-12 w-full sm:w-auto ">
        <div>
          <img className="sm:w-36 w-32" src={logo} alt="Logo" />
        </div>
        <div className="sm:hidden">
          <HiMenu className="text-white text-4xl" />
        </div>
        <div className="hidden sm:block ">
          <ol className="flex list-none text-white gap-6">
            <li>¿ Quines somos ?</li>
            <li>Contáctanos</li>
            <li>Precios</li>
            <li>Mapas</li>
            <li>Catálogo de clientes</li>
          </ol>
        </div>
      </div>
        <div className="hidden sm:block ">
        <button className="bg-[#000735] text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-blue-950">
          <h3>Solicita un Domi</h3>
        </button>
      </div>
    </div>
  );
}

export default NavbarDestock;
