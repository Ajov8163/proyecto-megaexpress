import nosotros from "../assets/img/iconos/nosotros.png";
import mision from "../assets/img/iconos/mision.png";
import vision from "../assets/img/iconos/vision.png";
import valores from "../assets/img/iconos/valores.png";
import NavbarDestock from "../components/navbar-destock";
const Quienessomos = () => {
  return (
    <div>
       <div className="sticky top-0 z-50">
        <NavbarDestock />
      </div>
    <div className="flex flex-col items-center sm:mx-12  justify-center px-3 sm:px-0 h-auto pt-10 sm:py-15">
      <h1 className="h1qs sm:text-5xl font-semibold sm:mb-[3%] mb-[10%]">¿ QUIENES SOMOS ?</h1>
      <div className="contenedor flex w-full justify-between sm:flex-row flex-col gap-8 sm:gap-0 ">
        <div className="border-2 border-gray-400 rounded-3xl p-5 flex items-center flex-col w-full sm:w-[23%] h-auto bg-white">
          <img className="w-[40%] mb-[5%]" src={nosotros} alt="img nosotros" />
          <h3 className="subqs mb-[5%]">NOSOTROS</h3>
          <p className="pqs text-center">
            En Megaexpress Mensajeria, nos dedicamos a ofrecer soluciones
            rapidas, seguras y confiables. Con inicios desde el 2019, tenemos
            años de experiencia en el sector, nuestro equipo de trabajo esta
            comprometido a satisfacer las necesidades de nuestros clientes,
            garantizando que cada paquete llegue a su destino a tiempo.Tu
            confianza es nuestra prioridad, por eso trabajamos incansablemente
            para superar tus espectaivas en cada servicio que ofrecemos.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-3xl p-5 flex items-center flex-col sm:w-[23%] w-full bg-white">
          <img className="w-[40%] mb-[5%]" src={mision} alt="img nosotros" />
          <h3 className="subqs text-3xl font-medium mb-[5%]">MISIÓN</h3>
          <p className="pqs text-center ">
          En Megaexpress Mensajeria, nuestra misión es proporcionar soluciones de envios rápidos, seguras y eficientes que superen las expectativas de nuestron clientes.
          Nos comprometemos a conectar personas y negocios a través de un servicio de entrega confiable. Creemos en construir relaciones duraderas y en ser un socio de confianza.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-3xl p-5 flex items-center flex-col sm:w-[23%] w-full bg-white">
          <img className="w-[40%] mb-[5%]" src={vision} alt="img nosotros" />
          <h3 className="subqs text-3xl font-medium mb-[5%]">VISION</h3>
          <p className="pqs text-center">
          En Megaexpress Mensajeria, nuestra vision es ser la empresa lider en soluciones de mensajeria y logística en la region, reconocida por la innovación confiabilidad y compromiso con la satisfacción del cliente.
          Aspiramos a costruir relaciones duraderas con nuestros clientes, siendo su primera opción en soluciones de mensajería efectiva.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-3xl p-5 flex items-center flex-col sm:w-[23%] w-full bg-white">
          <img className="w-[40%] mb-[5%]" src={valores} alt="img nosotros" />
          <h3 className="subqs text-3xl font-medium mb-[5%]"> VALORES</h3>
          <p className="pqs text-center">
          En Megaexpress Mensajeria, nos guiamos por valores fundamentales que definen nuestra identidad y nuestro compromiso con nuestros clientes. La <span className="font-semibold">INTEGRIDAD</span> es nuestra piedra angular, asegurando que cada entrega se realice con transparencia y honestidad. Fomentamos la <span className="font-semibold">RESPONSABILIDAD</span>, reconociendo la importancia de cumplir con nuestros plazos y promesas. La <span className="font-semibold">INNOVACIÓN</span> impulsa nuestra busqueda constante de mejorar nuestros servicios y adaptarnos a las necesidades cambiantes de nuestros clientes. Finalmente, valoramos la <span className="font-semibold">COLABORACIÓN</span>,  promoviendo un ambiente de trabajo en equipo que nos permite ofrecer un servicio excepcional y crear relaciones duraderas con nuestros clientes.  
          </p>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Quienessomos;
