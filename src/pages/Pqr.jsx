import { useState } from "react";
import NavbarDestock from "../components/navbar-destock";

const Pqr = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.message) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const whatsappMessage = `Mensaje de PQR\n\nHola, soy ${formData.name}.\n\nMensaje:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/573015478439?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      name: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavbarDestock />
      </div>
      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
          PQR - Peticiones, Quejas y Reclamos
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center">
          Envíanos tus comentarios, quejas o sugerencias. Estamos aquí para ayudarte.
        </p>
        <div className="w-full sm:w-3/4 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-2"
              placeholder="Tu nombre"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-semibold">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg p-2"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pqr;