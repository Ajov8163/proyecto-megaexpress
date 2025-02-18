import logo from "../assets/img/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
function NavbarDestock() {
  const handleScrollToSection8 = (e) => {
    e.preventDefault();
    document.getElementById("section8").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar bg-[#000735] sm:h-20 h-20 flex justify-between items-center px-3 sm:px-14 sm:rounded-b-[30px] rounded-b-2xl ">
      <div className="flex justify-around gap-40 items-center sm:gap-12 w-full sm:w-auto ">
       <Link to={"/"}>
       <div>
          <img className="sm:w-36 w-32" src={logo} alt="Logo" />
        </div>
        </Link>
        <div className="sm:hidden">
          <HiMenu className="text-white text-4xl" />
        </div>
        <div className="hidden sm:block ">
          <ol className="flex list-none text-white gap-6">
            <Link to={"/Quienessomos"}><li>¿ Quines somos ?</li></Link>
            <a href="#section8" onClick={handleScrollToSection8}><li>Contáctanos</li></a>
            <Link to={"/Precios"}><li>Precios</li></Link>
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
