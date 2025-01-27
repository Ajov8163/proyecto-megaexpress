// importacion de los componentes
import { Swiper, SwiperSlide } from "swiper/react";
// importacion de los estilos en general
import "swiper/swiper-bundle.css";
import desechables from "../../assets/img/clientes/desechables.jpg";
import drogueria from "../../assets/img/clientes/drogueria.jpg";
import fruty from "../../assets/img/clientes/fruty.jpg";
import juliao from "../../assets/img/clientes/juliao.jpg";
import lavanderia from "../../assets/img/clientes/lavanderia.jpg";
import ricuras from "../../assets/img/clientes/ricuras.png";
import supercarnes from "../../assets/img/clientes/supercarnes.jpg";


// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Section2 = () => {
  return (
    <div className="sm:mt-40 mt-20 sm:mx-12 px-3 sm:px-0  pb-20">
      <h1 className="flex justify-center sm:text-5xl text-2xl sm:mb-28 mb-8 sm:font-bold font-bold">NUESTROS ALIADOS</h1>
      <Swiper
      spaceBetween={30}
        cssMode={true}
        navigation={true}
        // pagination={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={6}
        mousewheel={true}
        keyboard={false}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="Swiper2 w-full sm:h-auto h-50 "
      >
        <SwiperSlide>
          <img className="sm:w-60 w-48" src={desechables} alt="desechables" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sm:w-60 w-48" src={drogueria} alt="drogueria" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-48" src={fruty} alt="fruty" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-48" src={juliao} alt="juliao" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-48" src={lavanderia} alt="lavanderia" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-48" src={ricuras} alt="ricuras" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-48" src={supercarnes} alt="supercarnes" />
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section2;
