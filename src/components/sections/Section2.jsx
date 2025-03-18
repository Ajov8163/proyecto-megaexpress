// importacion de los componentes
import { Swiper, SwiperSlide } from "swiper/react";
// importacion de los estilos en general
import "swiper/swiper-bundle.css";
import desechables from "../../assets/img/clientes/desechables.jpg";
import drogueria from "../../assets/img/clientes/drogueria.jpg";
import fruty from "../../assets/img/clientes/fruty.jpg";
import juliao from "../../assets/img/clientes/juliao.jpg";
import lavanderia from "../../assets/img/clientes/lavanderia.jpg";
import ricuras from "../../assets/img/clientes/ricuras.jpg";
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
    <div className="sm:mt-40 mt-20 sm:mx-12 px-3 sm:px-0   ">
      <h1 className="flex justify-center sm:text-5xl text-2xl sm:mb-28 mb-8 sm:font-bold font-semibold">NUESTROS ALIADOS</h1>
      <Swiper
      spaceBetween={27}
        cssMode={true}
        // navigation={true}
        // pagination={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          // cuando la ventana sea >= 640px
          640: {
            slidesPerView: 4,
          
          },
          // cuando la ventana sea >= 768px
          768: {
            slidesPerView: 4,
           
          },
          // cuando la ventana sea >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 56,
          },
        }}
        slidesPerView={4}
        mousewheel={false}
        keyboard={false}
        autoplay={{ delay: 2000, disableOnInteraction: false}}
        speed={6500}
        freeMode={true} 
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="Swiper2 w-full sm:h-auto sm:rounded-full rounded-full flex justify-center "
      >
        <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full " src={desechables} alt="desechables" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={drogueria} alt="drogueria" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={fruty} alt="fruty" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={juliao} alt="juliao" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={lavanderia} alt="lavanderia" />
          </SwiperSlide>
          <SwiperSlide  className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={ricuras} alt="ricuras" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
          <img className="sm:w-60 w-full h-auto rounded-full" src={supercarnes} alt="supercarnes" />
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section2;


