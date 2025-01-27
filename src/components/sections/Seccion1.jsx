
// Importa las imágenes locales
import imagen1 from "../../assets/img/compra.jpg";
import imagen2 from "../../assets/img/negocios.jpg";
import imagen3 from "../../assets/img/servicios.jpg";
import imagen4 from "../../assets/img/seguro.png";
// importacion de los componentes
import { Swiper, SwiperSlide } from "swiper/react";
// importacion de los estilos en general
import "swiper/swiper-bundle.css";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
const Section1 = () => {
  return (
   
      <div className="sm:flex  sm:mx-12 sm:mt-20 mt-12 justify-center gap-20 h-auto items-center">
      <div className="sm:w-6/12 px-3 sm:h-96 mb-10 sm:mb-0">
        <h1 className=" sm:text-5xl sm:font-bold text-2xl font-bold sm:mb-8 mb-6 ">
          Bienvenido a Megaexpress Mensajería, tu solución rápida.
        </h1>
        <p className="sm:mb-8 mb-8 text-sm sm:text-base">
          En Megaexpress Mensajería, ofrecemos servicios de mensajería
          confiables y eficientes para satisfacer todas tus necesidades.
          Descubre cómo podemos ayudarte a enviar tus paquetes de manera segura
          y rápida
        </p>
        <button className="border-2 border-blue-950 rounded-lg sm:py-2 py-[4px] sm:px-8 px-[18px]  hover:bg-[#000735] hover:text-white">
          Regístrate
        </button>
      </div>
      <div className="sm:w-5/12 px-3 ">
        <Swiper
          cssMode={true}
          // navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={false}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="Swiper1 w-full h-full"
        >
          <SwiperSlide>
            <img src={imagen1} alt="Imagen 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imagen2} alt="Imagen 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imagen3} alt="Imagen 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imagen4} alt="Imagen 4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    
  )
}

export default Section1;


