import desechables from "../assets/img/clientes/desechables.jpg";
import drogueria from "../assets/img/clientes/drogueria.jpg";
import fruty from "../assets/img/clientes/fruty.jpg";
import juliao from "../assets/img/clientes/juliao.jpg";
import lavanderia from "../assets/img/clientes/lavanderia.jpg";
import ricuras from "../assets/img/clientes/ricuras.jpg";
import supercarnes from "../assets/img/clientes/supercarnes.jpg";

const clients = [
  {
    name: 'Desechables del Cesar',
    description: 'Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y mucho más!',
    image: desechables,
  },
  {
    name: 'Disquimico Juliao',
    description: 'Productos relacionados con químicos, aseo industrial, colonias, cuidado personal y mucho más!',
    image: juliao,
  },
  {
    name: 'Super carnes AM',
    description: 'Ofrecemos variedad excepcional de cortes frescos y de alta calidad, desde los clásicos hasta las más especiales.',
    image: supercarnes,
  },
  {
    name: 'Ricuras del Mar',
    description: 'Especialistas en comida de mar, jugos naturales y frappe. Con opciones de reservas.',
    image: ricuras,
  },
  {
    name: 'El universo del lavado',
    description: 'Lavandería autoservicio y especialistas en lavado, secado, tintorería, planchado.',
    image: lavanderia,
  },
  {
    name: 'fruty',
    description: 'Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y dulcería.',
    image: fruty,
  },
  {
    name: 'Drogueria',
    description: 'Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y dulcería.',
    image: drogueria,
  },
];

const Cataclientes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl sm:text-5xl font-bold mb-4 sm:mb-8">CATÁLOGO DE CLIENTES</h1>
      <p className="text-center text-lg sm:text-xl mb-8">ENCUENTRA LO QUE NECESITAS EN NUESTRA VARIEDAD DE CLIENTES</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={client.image} alt={client.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
            <p className="text-center mb-4">{client.description}</p>
            <button 
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => window.open('https://wa.me/+573003264686?text=Hola, estoy interesado en sus servicios.', '_blank')}
            >
              Contactar
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Cataclientes;
