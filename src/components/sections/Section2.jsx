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
    <div className="sm:mt-40 mt-20 sm:mx-12 px-3 sm:px-0  pb-20">
      <h1 className="flex justify-center sm:text-5xl text-2xl sm:mb-28 mb-8 sm:font-bold font-bold">NUESTROS ALIADOS</h1>
      <Swiper
      spaceBetween={10}
        cssMode={true}
        // navigation={true}
        // pagination={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          // cuando la ventana sea >= 640px
          640: {
            slidesPerView: 5,
          },
          // cuando la ventana sea >= 768px
          768: {
            slidesPerView: 4,
          },
          // cuando la ventana sea >= 1024px
          1024: {
            slidesPerView: 5,
            
          },
        }}
        slidesPerView={4}
        mousewheel={false}
        keyboard={false}
        autoplay={{ delay: 3000, disableOnInteraction: false}}
        speed={3000}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="Swiper2 w-full sm:h-auto "
      >
        <SwiperSlide className="w-fit ">
          <img className="sm:w-60 w-24 rounded-full" src={desechables} alt="desechables" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sm:w-60 w-24 rounded-full" src={drogueria} alt="drogueria" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-24 rounded-full" src={fruty} alt="fruty" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-24 rounded-full" src={juliao} alt="juliao" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-24 rounded-full" src={lavanderia} alt="lavanderia" />
          </SwiperSlide>
          <SwiperSlide >
          <img className="sm:w-60 w-24 rounded-full" src={ricuras} alt="ricuras" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="sm:w-60 w-24 rounded-full" src={supercarnes} alt="supercarnes" />
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section2;
