import logo from "../../assets/img/logo.png";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import qr from "../../assets/img/qr.png";
const Section8 = () => {
  return (
    <div className="bg-[#000735] text-white p-12 mt-10 sm:mt-0">
      <div className="parte1 flex sm:items-center sm:justify-between w-full flex-col sm:flex-row">
        <div className="parte1-1">
          <img src={logo} alt="logo" className="w-48 pb-12" />
          <div className="pb-8 text-lg">
            <p className="pb-2">Dirección:</p>
            <p>Mz D01 casa 14a Barrio el Porvenir, Valledupar-Cesar</p>
          </div>
          <div className="pb-8 text-lg">
            <p className="pb-2">Contacto:</p>
            <div className="flex gap-2 items-center">
              <SiWhatsapp className="" />
              <p>3015478439</p>
            </div>
            <div className="flex gap-2 items-center">
              <FiPhoneCall className="" />
              <p>3207562625</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoMailOutline className="" />
              <p>megaexpress8163@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 sm:pb-8 pb-10">
            <FaFacebook className="text-5xl" />
            <IoLogoInstagram className="text-5xl" />
          </div>
        </div>
        <div className="parte1-2 sm:text-center text-lg pb-8 sm:pb-0">
          <p>¿Quienes Somos?</p>
          <p>Catalogo de Clientes</p>
          <p>Precios</p>
          <p>Horario</p>
        </div>
        <div className="parte1-3 flex flex-col sm:flex-row mb-10 sm:mb-0 border-2 border-white sm:border-none rounded-xl  items-center gap-3 px-4 py-8 sm:p-0">
          <div>
            <p className="text-3xl">Necesitas un Domi?</p>
            <p className="text-3xl pb-4 text-center sm:text-start">Escaneame !</p>
            <div className="flex items-center">
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <TfiLayoutLineSolid className="text-4xl hidden sm:block"/>
            <HiMiniArrowLongRight className="text-4xl hidden sm:block -m-1" />
            </div>
          </div>
          <div>
            <img src={qr} alt="qr" className="w-56 rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="parte2 flex flex-col-reverse sm:flex-row justify-between border-t-2 border-width pt-5">
        <div>©2025 Megaexpress. Todos los derechos reservados.</div>
        <div className="flex sm:gap-8 gap-2 flex-col sm:flex-row mb-8 sm:mb-0">
          <p>Politica y Privacidad</p>
          <p>Terminos de servicio</p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
