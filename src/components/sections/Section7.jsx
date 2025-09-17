import wilmer from '../../assets/img/mensajeros/wilmer.jpg';
import raul from '../../assets/img/mensajeros/raul.jpg';
import niris from '../../assets/img/mensajeros/niris.jpg';
import albert from '../../assets/img/mensajeros/albert.jpg'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const team = [
  {
    name: 'Wilmer Añez',
    role: 'Mensajero',
    desc: 'El divertido del grupo, con gran experiencia en el cargo.',
    img: wilmer,
  },
  {
    name: 'Raul Flores',
    role: 'Mensajero',
    desc: 'Rapido,serio y responsable, muy fluido en el trabajo.',
    img: raul,
  },
  {
    name: 'Niris Benavides',
    role: 'Mensajera',
    desc: 'Exelente calidad de persona, fuerte y luchadora.',
    img: niris,
  },
  {
    name: 'Albert Rodriguez',
    role: 'Mensajero',
    desc: 'Agil, estrovertido, con gran capacidad en el ambito laboral.',
    img: albert,
  },
];

const Section7 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 sm:mb-16 sm:mx-12 px-3">
      <h1 className='sm:text-5xl text-2xl font-semibold mb-5'>NUESTRO EQUIPO</h1>
      <p className='sm:pb-12 pb-4 sm:text-base w-8/12 text-center'>Conoce a los profecionales detrás de Megaexpress</p>
      <div className='w-full'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="py-4"
        >
          {team.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg hover:bg-[#000735] hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95 flex flex-col items-center">
                <img className='rounded-lg border-2 border-white mb-3 w-full' src={member.img} alt={member.name} />
                <h2 className='font-semibold'>{member.name}</h2>
                <p className='font-medium text-sm'>{member.role}</p>
                <p className='text-xs text-center'>{member.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex flex-col items-center justify-center mt-14'>
        <h1 className='sm:text-4xl text-2xl font-semibold sm:mb-6 mb-2'>
        ¡Estamos contratando!
        </h1>
        <p className=''>Únete a nuestro equipo y crece con nosotros.</p>
        <Link to={"/dashboard"}>
        <button className='hover:bg-[#000735] hover:text-white px-8 py-2 rounded-lg mt-6 border-2 border-[#000735]'>Aplicar</button>
        </Link>
      </div>
    </div>
  );
};

export default Section7;
