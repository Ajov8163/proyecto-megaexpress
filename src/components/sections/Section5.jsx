import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Section5 = () => {
  return (
    <div className="sm:mx-12 px-3 sm:px-0 mt-14">
      <div>
        <h1 className="flex justify-center sm:text-5xl text-2xl sm:mb-28 mb-8 sm:font-bold font-bold">
          TESTIMONIOS
        </h1>
        <Swiper
          spaceBetween={30}
          cssMode={true}
          // navigation={true}
          navigation={{
            prevEl: ".swiper5-button-prev",
            nextEl: ".swiper5-button-next",
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          mousewheel={true}
          keyboard={true}
          breakpoints={{
            // cuando la ventana sea >= 640px
            640: {
              slidesPerView: 4,
            },
            // cuando la ventana sea >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          // autoplay={{ delay: 2000, disableOnInteraction: false}}
          // speed={6500}
          // freeMode={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="swiper5 "
        >

            <div className="swiper5-button-prev  rounded-full flex justify-center items-center bg-[#000735] absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
            <IoIosArrowBack className="text-3xl text-white " />
          </div>
          <div className="swiper5-button-next  rounded-full flex justify-center items-center bg-[#000735] absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
            <IoIosArrowForward className="text-3xl text-white " />
          </div>


          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
            </div>
            <p className="mb-7">
              ¡Excelente servicio! Mis paquetes siempre llegan a tiempo y en
              perfectas condiciones. El personal es amable y siempre está
              dispuesto a ayudar. Recomiendo Megaexpres Mensajeria a cualquiera
              que necesite enviar algo de manera rápida y segura.
            </p>
            <div>
              <h3 className="font-semibold">Cristian Cely</h3>
              <p>Administrador, Desechables del Cesar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
            </div>
            <p className="mb-7">
              Estoy muy satisfecho con Megaexpres Mensajeria. Han sido
              increíblemente eficientes y confiables. Además, su seguimiento en
              tiempo real me da mucha tranquilidad. No dudaría en usar sus
              servicios nuevamente.
            </p>
            <div>
              <h3 className="font-semibold">William Velasquez</h3>
              <p>Vendedor, Tiendas Pintuco</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
            </div>
            <p className="mb-7">
              El equipo de Megaexpres Mensajeria es increíblemente amable y
              profesional. Siempre están dispuestos a resolver cualquier duda y
              brindar asistencia con una sonrisa. Es un placer interactuar con
              ellos. ¡Recomendado sin duda!
            </p>
            <div>
              <h3 className="font-semibold">Libardo Serrano</h3>
              <p>Gerente, Desechables y Mas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
            </div>
            <p className="mb-7">
              Estoy muy impresionado con la seguridad que ofrece Megaexpres
              Mensajeria. Mis paquetes siempre llegan sellados y en perfecto
              estado. Son muy confiables, me siento muy seguro utilizando sus
              servicios. Super recomendables.
            </p>
            <div>
              <h3 className="font-semibold">Lisseth Rosso</h3>
              <p>Gerente, Imporcell</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
              <FaStar className="text-3xl text-[#000735]" />
            </div>
            <p className="mb-7">
              Utilizar Megaexpres Mensajeria es increíblemente sencillo. Puedo
              realizar envíos en pocos pasos y sin complicaciones. Todo el
              proceso es muy amigable para el usuario, lo cual hace que la
              experiencia sea agradable y sin estrés.
            </p>
            <div>
              <h3 className="font-semibold">Paola</h3>
              <p>Gerente, Super Carnes AM</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-[#000735] rounded-xl p-8 w-full h-auto">
            <div className="flex mb-7">
              <FaStar className="text-3xl #000735" />
              <FaStar className="text-3xl #000735" />
              <FaStar className="text-3xl #000735" />
              <FaStar className="text-3xl #000735" />
              <FaStar className="text-3xl #000735" />
            </div>
            <p className="mb-7">
              Desde que empezamos a usar Megaexpres Mensajeria, nuestros
              clientes han expresado un alto nivel de satisfacción. Los envíos
              siempre llegan a tiempo y en excelente estado. La confianza y
              fiabilidad que ofrecen excelente.
            </p>
            <div>
              <h3 className="font-semibold">Joiner Vanegas</h3>
              <p>Gerente, Colordrywall</p>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default Section5;
