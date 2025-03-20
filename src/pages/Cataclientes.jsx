import desechables from "../assets/img/clientes/desechables.jpg";
import drogueria from "../assets/img/clientes/drogueria.jpg";
import fruty from "../assets/img/clientes/fruty.jpg";
import juliao from "../assets/img/clientes/juliao.jpg";
import lavanderia from "../assets/img/clientes/lavanderia.jpg";
import ricuras from "../assets/img/clientes/ricuras.jpg";
import supercarnes from "../assets/img/clientes/supercarnes.jpg";
import NavbarDestock from "../components/navbar-destock";

const clients = [
  {
    name: "Desechables del Cesar",
    description:
      "Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y mucho más!",
    image: desechables,
    whatsapp: "+573205490196"
  },
  {
    name: "Disquimico Juliao",
    description:
      "Productos relacionados con químicos, aseo industrial, colonias, cuidado personal y mucho más!",
    image: juliao,
    whatsapp: "+573107346137"
  },
  {
    name: "Super carnes AM",
    description:
      "Ofrecemos variedad excepcional de cortes frescos y de alta calidad, desde los clásicos hasta las más especiales.",
    image: supercarnes,
    whatsapp: "+573104757731",
  },
  {
    name: "Ricuras del Mar",
    description:
      "Especialistas en comida de mar, jugos naturales y frappe. Con opciones de reservas.",
    image: ricuras,
    whatsapp: "+573153801868",
  },
  {
    name: "El universo del lavado",
    description:
      "Lavandería autoservicio y especialistas en lavado, secado, tintorería, planchado.",
    image: lavanderia,
    whatsapp: "+573156974435",
  },
  {
    name: "fruty",
    description:
      "Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y dulcería.",
    image: fruty,
    whatsapp: "+573022274477",
  },
  {
    name: "Drogueria",
    description:
      "Encuentra gran variedad de productos relacionados con desechables, aseo, cuidado personal y dulcería.",
    image: drogueria,
    whatsapp: "+573152665292",
  },
];

const Cataclientes = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavbarDestock />
      </div>
      <div className="mx-12 py-9">
        <h1 className="text-center text-3xl sm:text-5xl font-bold mb-4 sm:mb-8">
          CATÁLOGO DE CLIENTES
        </h1>
        <p className="text-center text-lg sm:text-xl mb-8">
          ENCUENTRA LO QUE NECESITAS EN NUESTRA VARIEDAD DE CLIENTES
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 ">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-start shadow-lg "
            >
              <img
                src={client.image}
                alt={client.name}
                className="shadow-md rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
              <p className="text-xs md:text-base mb-4">{client.description}</p>
              <button
                className="bg-[#000735] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() =>
                  window.open(
                    `https://wa.me/${client.whatsapp}?text=Hola, estoy interesado en sus servicios.`,
                    "_blank"
                  )
                }
              >
                Contactar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cataclientes;
