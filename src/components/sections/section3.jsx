import compra from "../../assets/img/compra.jpg";
import seguro from "../../assets/img/seguro.png";
import negocio from "../../assets/img/negocios.jpg";
const Section3 = () => {
  return (
    <div className="flex flex-col items-center text-center sm:mx-12 mt-20 sm:px-0 px-3">
      <h1 className="sm:text-5xl text-2xl  font-bold sm:mb-20 mb-14">
        Descubre nuestras<br className="sm:hidden"/> características únicas <br className="hidden"/>que <br className="hidden sm:block" /> transforman la mensajería
        en <br className="hidden sm:block" />
         una experiencia.
      </h1>
      <div className="flex sm:gap-14 sm:flex-row flex-col gap-6 ">
        <div className=" border-2 border-[#000735]  rounded-3xl">
          <img className="rounded-[22px]" src={compra} alt="compra" />
          <div className="p-5 text">
            <h3 className="text-xl font-semibold mb-5">
              Entregas rápidas y eficientes para{" "}
                <br className="hidden" />
              todos tus enviós.
            </h3>
            <p>
              Nuestros servicios de mensajería son rápidos, asegurando que tus
              paquetes lleguen a su destino lo mas pronto posible.
            </p>
          </div>
        </div>
        <div className=" border-2 border-[#000735]  rounded-3xl">
          <img className="rounded-[22px]" src={seguro} alt="seguro" />
          <div className="p-5 text">
            <h3 className="text-xl font-semibold mb-5">
              Eficiencia garantizada en cada
              <br /> entrega, sin importar la distancia.
            </h3>
            <p>
              Entregas de manera confiable para mejorar la experiencia de sus
              clientes y optimizar las operaciones de su negocio.
            </p>
          </div>
        </div>
        <div className=" border-2 border-[#000735]  rounded-3xl">
          <img className="rounded-[22px]" src={negocio} alt="negocio" />
          <div className="p-5 text">
            <h3 className="text-xl font-semibold mb-5">
              Atención al cliente excepcional para{" "}
                <br className="hidden" />
              resolver todas tus inquietudes.
            </h3>
            <p>
              Nuestro call center esta capacitado para resolver las necesidades
              de nuestros clientes, brindando un servicio personalizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
