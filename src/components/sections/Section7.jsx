import wilmer from '../../assets/img/mensajeros/wilmer.jpg';
import raul from '../../assets/img/mensajeros/raul.jpg';
import niris from '../../assets/img/mensajeros/niris.jpg';
import albert from '../../assets/img/mensajeros/albert.jpg'
import { Link } from 'react-router-dom';
const Section7 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 sm:mb-16 sm:mx-12 px-3">
      <h1 className='sm:text-5xl text-2xl font-semibold mb-5'>NUESTRO EQUIPO</h1>
      <p className='sm:pb-12 pb-4 sm:text-base w-8/12 text-center'>Conoce a los profecionales detrás de Megaexpress</p>
      <div className='flex flex-row sm:justify-evenly justify-center items-center w-full '>
        <div className="hidden sm:block border-2 border-gray-200 p-4 rounded-lg shadow-lg w-2/12 hover:bg-[#000735] hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className='rounded-lg border-2 border-white' src={wilmer} alt="Team Member" />
          <div className='pt-3'>
          <h2 className='font-semibold'>Wilmer Añez</h2>
          <p className='font-medium text-sm'>Mensajero</p>
          <p className='text-xs'>El divertido del grupo, con gran experiencia en el cargo. </p>
          </div>
        </div>
        <div className=" hidden sm:block border-2 border-gray-200 p-4 rounded-lg shadow-lg w-2/12 hover:bg-[#000735] hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className='rounded-lg border-2 border-white' src={raul} alt="Team Member" />
          <div className='pt-3'>
          <h2 className='font-semibold'>Raul Flores</h2>
          <p className='font-medium text-sm'>Mensajero</p>
          <p className='text-xs'>
            Rapido,serio y responsable, muy fluido en el trabajo.
          </p>
          </div>
        </div>
        <div className="hidden sm:block border-2 border-gray-200 p-4 rounded-lg shadow-lg w-2/12  hover:bg-[#000735] hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className='rounded-lg border-2 border-white' src={niris} alt="Team Member" />
          <div className='pt-3'>
          <h2 className='font-semibold'>Niris Benavides</h2>
          <p className='font-medium text-sm'>Mensajera</p>
          <p className='text-xs'>Exelente calidad de persona, fuerte y luchadora.</p>
          </div>
        </div>
        <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg sm:w-2/12 w-11/12 hover:bg-[#000735] hover:text-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 sm:hover:scale-110 hover:scale-105">
          <img className='w-12/12 rounded-lg border-2 border-white' src={albert} alt="Team Member" />
          <div className='pt-3'>
          <h2 className='font-semibold'>Albert Rodriguez</h2>
          <p className='font-medium text-sm'>Mensajero</p>
          <p className='text-xs'>Agil, estrovertido, con gran capacidad en el ambito laboral.  </p>
          </div>
        </div>
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
