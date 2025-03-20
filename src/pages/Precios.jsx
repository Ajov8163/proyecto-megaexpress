

import { FaCheck } from "react-icons/fa6";
import NavbarDestock from "../components/navbar-destock";
import precios from "../assets/img/iconos/precios.png";
import { Link } from "react-router-dom";

const Precios = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavbarDestock />
      </div>
      <div className="flex flex-col sm:mx-12 py-10 sm:pt-15 px-3 sm:px-0 ">
        <div className="prep1 flex flex-col items-center sm:mb-10">
          <h1 className="sm:text-5xl text-3xl pb-5 font-semibold">Precios</h1>
          <p className="text-lg text-center w-[90%] sm:w-[65%] pb-5">
            Nuestros precios son competitivos y se ajustan a tus necesidades de
            envios, ofreciendo opciones personalizadas de acuerdo al producto
            que se transporta.
          </p>
          <div className="contenedor flex sm:w-full sm:justify-evenly items-center sm:flex-row  flex-col gap-8 sm:gap-0">
            <div className="card border-2 border-gray-400 rounded-3xl px-5 py-8 flex items-center flex-col w-[90%] sm:w-[20%] h-auto bg-white shadow-lg">
              <p className="text-base font-semibold pb-5">DOMICILIO BASICO</p>
              <p className="text-5xl font-semibold pb-3">
                $5000<span className="text-base">Cop</span>
              </p>
              <p className="pb-5">Puedes enviar</p>
              <div className="pb-5 w-full">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Almuerzos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Sobres</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Encomiendas pequeñas</p>
                </div>
              </div>
              <div className="pb-5">
                <p className="font-semibold">NOTA :</p>
                <p className="text-xs">
                  Este precio varía dependiendo la distancia, si toca entrar a
                  conjuntos cerrados o si toca subir caminando a varios pisos
                  de edificios. ESTA NOTA APLICA PARA TODOS LOS SERVICIOS.
                </p>
              </div>
             <Link to="/solicita" className="w-full">
             <button className="border-2 py-2 rounded-xl w-full text-white bg-[#000735]">
                Solicitar
              </button>
             </Link>
            </div>
            <div className="card border-2 border-gray-400 rounded-3xl px-5 py-8 flex items-center flex-col w-[90%] sm:w-[20%] h-auto bg-white shadow-lg">
              <p className="text-base font-semibold pb-3">DOMICILIO PESADO</p>
              <div className="pb-2">
                <img src={precios} alt="precios" />
              </div>
              <p className="pb-4">Puedes enviar</p>
              <div className="pb-5 w-full">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Cuñetes de pintura</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Cajas pesadas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Bolsas grandes</p>
                </div>
              </div>
              <div className="pb-5">
                <p className="font-semibold">NOTA :</p>
                <p className="text-xs">
                  Este precio varía dependiendo el peso y la cantidad de los productos que se envían.
                  Para más información y una cotización precisa, por favor comunícate con nosotros.
                </p>
              </div>
              <button className="border-2 px-8 py-2 rounded-xl w-full text-white bg-[#000735]"
               onClick={() =>
                window.open(
                  `https://wa.me/+573015478439?text=Hola, quiero cotizar un servicio.`,
                  "_blank"
                )
              }>
                Cotizar
              </button>
            </div>
            <div className="card border-2 border-gray-400 rounded-3xl px-5 py-8 flex items-center flex-col w-[90%] sm:w-[20%] h-auto bg-white shadow-lg">
              <p className="text-base font-semibold pb-3 text-center">DOMICILIO DE ENVIO DE DINERO</p>
              <div className="pb-2">
                <img className="w-16" src={precios} alt="precios" />
              </div>
              <p className="pb-3">Puedes enviar</p>
              <div className="pb-4 w-full">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Enviar dinero</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Consignaciones y pagos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Retiros</p>
                </div>
              </div>
              <div className="pb-5">
                <p className="font-semibold">NOTA :</p>
                <p className="text-xs">
                  Este precio varía dependiendo la cantidad de dinero que se envía y en caso de ser una consignación varía por la demora en el banco.
                </p>
              </div>
              <Link to="/solicita" className="w-full">
              <button className="border-2 px-8 py-2 rounded-xl w-full text-white bg-[#000735]">
                Solicitar
              </button>
              </Link>
            </div>
            <div className="card border-2 border-gray-400 rounded-3xl px-5 py-8 flex items-center flex-col w-[90%] sm:w-[20%] h-auto bg-white shadow-lg">
              <p className="text-base font-semibold pb-5">DOMICILIO DE COMPRAS</p>
              <p className="text-5xl font-semibold pb-3">
                $6000<span className="text-base">Cop</span>
              </p>
              <p className="pb-5">Puedes hacer</p>
              <div className="pb-5 w-full">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Compras en C. comerciales</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Compras de mercados</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Compras en cualquier local</p>
                </div>
              </div>
              <div className="pb-5">
                <p className="font-semibold">NOTA :</p>
                <p className="text-xs">
                  Este servicio inicia con un valor de 6k para una compra sencilla, pero varía dependiendo la cantidad, demora de la compra y lugares a donde se puede llegar a conseguir los productos.
                </p>
              </div>
              <Link to="/solicita" className="w-full">
              <button className="border-2 px-8 py-2 rounded-xl w-full text-white bg-[#000735]">
                Solicitar
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="prep2 flex flex-col items-center h-screen justify-center">
          <h1 className="sm:text-5xl text-3xl pb-10 font-semibold pt-20">OTROS SERVICIOS</h1>
          <p className="w-[90%] sm:w-[45%] text-center pb-28">
            Nuestros precios son competitivos y se ajustan a tus necesidades de
            envíos, ofreciendo opciones personalizadas de acuerdo al producto
            que se transporta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex w-full sm:w-[50%] justify-center sm:justify-end">
              <div className="flex flex-col w-[90%] sm:w-[70%] gap-5 mb-4 sm:mb-0">
                <p className="text-xl pb-5">
                  Si necesitas un servicio que no tiene un valor estándar, no
                  dudes en llamarnos o enviarnos un mensaje. Nuestro equipo está
                  listo para escucharte y atender tus necesidades específicas.
                  Así podremos ofrecerte una cotización ajustada y personalizada
                  que se adapte a lo que buscas. Estamos aquí para ayudarte y
                  asegurarnos de que recibas el mejor servicio.
                </p>
                <button className="hover:bg-white hover:text-[#000735] hover:border-2 hover:border-[#000735] hover:shadow-xl w-fit py-3 px-12 rounded-2xl text-white bg-[#000735]"
                  onClick={() =>
                    window.open(
                      `https://wa.me/+573015478439?text=Hola, quiero cotizar un servicio.`,
                      "_blank"
                    )
                  }>
                  COTIZAR
                </button>
              </div>
            </div>
            <div className="flex w-full sm:w-[50%] justify-center items-center">
              <div className="w-[90%] sm:w-[50%] h-auto sm:h-[80%] py-5 px-8 shadow-xl bg-white rounded-2xl justify-center items-start gap-3 flex flex-col">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Envios de torta</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Celulares de gama alta</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Portátiles</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Etc...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precios;
