import logo from "../assets/img/logo.png";
import { HiMenu } from "react-icons/hi";
function NavbarDestock() {
  return (
    <navbar className="bg-[#000735] sm:h-20 h-16 flex justify-between items-center px-3 sm:px-14 sm:rounded-b-[30px] rounded-b-2xl">
      <div className="flex justify-between items-center sm:gap-12 w-full sm:w-auto ">
        <div>
          <img className="sm:w-36 w-24" src={logo} alt="Logo" />
        </div>
        <div className="sm:hidden">
          <HiMenu className="text-white text-3xl" />
        </div>
        <div className="hidden sm:block ">
          <lo className="flex list-none text-white gap-6">
            <li>¿ Quines somos ?</li>
            <li>Contáctanos</li>
            <li>Precios</li>
            <li>Mapas</li>
            <li>Catálogo de clientes</li>
          </lo>
        </div>
      </div>
        <div className="hidden sm:block ">
        <button className="bg-[#000735] text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-blue-950">
          <h3>Solicita un Domi</h3>
        </button>
      </div>
    </navbar>
  );
}

export default NavbarDestock;
