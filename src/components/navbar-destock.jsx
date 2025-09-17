import { useState } from "react";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function NavbarDestock() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection8 = (e) => {
    e.preventDefault();
    document.getElementById("section8").scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSolicitaClick = () => {
    navigate("/Solicita");
  };

  return (
    <div className="navbar bg-[#000735] sm:h-20 h-20 flex justify-between items-center px-3 sm:px-14 sm:rounded-b-[30px] rounded-b-2xl">
      <div className="flex justify-around gap-40 items-center sm:gap-12 w-full sm:w-auto">
        <Link to={"/"}>
          <div>
            <img className="sm:w-36 w-32" src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="sm:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <HiX className="text-white text-4xl menumobil" />
          ) : (
            <HiMenu className="text-white text-4xl menumobil" />
          )}
        </div>
        <div className="hidden sm:block">
          <ol className="flex list-none text-white gap-6">
            <Link to={"/Quienessomos"}>
              <li>¿ Quines somos ?</li>
            </Link>
            <a href="#section8" onClick={handleScrollToSection8}>
              <li>Contáctanos</li>
            </a>
            <Link to={"/Precios"}>
              <li>Precios</li>
            </Link>
            <Link to={"/Mapas"}>
              <li>Mapas</li>
            </Link>
            <Link to={"/cataclientes"}><li>Catálogo de clientes</li></Link>
            <Link to={"/pqr"}><li>PQR</li></Link>
          </ol>
        </div>
        <div
          className={`fixed top-0 right-0 h-auto bg-[#000735] transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden rounded-lg shadow-lg`}
        >
          <div className="flex flex-col w-64 h-full list-none text-white gap-6 p-4 border-t border-white">
            <button
              className="self-end text-white text-2xl"
              onClick={toggleMobileMenu}
            >
              <HiX />
            </button>
            <ol className="flex flex-col gap-6">
              <Link to={"/Quienessomos"}>
                <li className="py-2 border-b border-white">¿ Quines somos ?</li>
              </Link>
              <a href="#section8" onClick={handleScrollToSection8}>
                <li className="py-2 border-b border-white">Contáctanos</li>
              </a>
              <Link to={"/Precios"}>
                <li className="py-2 border-b border-white">Precios</li>
              </Link>
              <Link to={"/Mapas"}>
                <li className="py-2 border-b border-white">Mapas</li>
              </Link>
              <Link to={"/cataclientes"}><li className="py-2 border-b border-white ">Catálogo de clientes</li></Link>
              <Link to={"/pqr"}><li className="py-2 border-b border-white ">PQR</li></Link>
            </ol>
            <div className="flex justify-center p-4 mt-auto">
              <Link to={"/Solicita"}>
                <button className="bg-[#000735] text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-950">
                  <h3>Solicita un Domi</h3>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <button
          onClick={handleSolicitaClick}
          className="bg-[#000735] text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-white  hover:text-blue-950 duration-700"
        >
          <h3>Solicita un Domi</h3>
        </button>
      </div>
    </div>
  );
}

export default NavbarDestock;
