import { useState } from "react";

const Dashboard = () => {
  const [services, setServices] = useState([]); // Lista de servicios comienza en blanco
  const [clients, setClients] = useState([
    { id: 1, name: "Juan Pérez", phone: "3001234567", email: "juan@example.com", address: "Calle 123" },
    { id: 2, name: "María López", phone: "3107654321", email: "maria@example.com", address: "Carrera 45" },
  ]);

  const [formData, setFormData] = useState({
    type: "",
    amount: "",
    clientId: "",
  });

  const [clientFormData, setClientFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [editingClientId, setEditingClientId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientFormData({ ...clientFormData, [name]: value });
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.amount || !formData.clientId) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const currentDate = new Date();
    const selectedClient = clients.find((client) => client.id === parseInt(formData.clientId));

    const newService = {
      id: services.length + 1,
      type: formData.type,
      amount: parseFloat(formData.amount),
      date: currentDate.toISOString().split("T")[0], // Fecha en formato YYYY-MM-DD
      time: currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), // Hora en formato HH:MM
      client: selectedClient ? selectedClient.name : "Cliente desconocido",
    };

    setServices([...services, newService]);
    setFormData({ type: "", amount: "", clientId: "" });
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (!clientFormData.name || !clientFormData.phone || !clientFormData.email || !clientFormData.address) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (editingClientId) {
      // Editar cliente existente
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === editingClientId ? { ...client, ...clientFormData } : client
        )
      );
      setEditingClientId(null);
    } else {
      // Agregar nuevo cliente
      const newClient = {
        id: clients.length + 1,
        name: clientFormData.name,
        phone: clientFormData.phone,
        email: clientFormData.email,
        address: clientFormData.address,
      };
      setClients([...clients, newClient]);
    }

    setClientFormData({ name: "", phone: "", email: "", address: "" });
  };

  const handleEditClient = (clientId) => {
    const clientToEdit = clients.find((client) => client.id === clientId);
    if (clientToEdit) {
      setClientFormData(clientToEdit);
      setEditingClientId(clientId);
    }
  };

  const handleDeleteClient = (clientId) => {
    if (window.confirm("¿Está seguro de que desea eliminar este cliente?")) {
      setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
    }
  };

  const totalIncome = Array.isArray(services)
    ? services.reduce((acc, service) => acc + service.amount, 0)
    : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Administrativo</h1>

      {/* Formulario para agregar servicios */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Agregar Servicio</h2>
        <form onSubmit={handleAddService} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Tipo de Servicio</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Seleccione</option>
              <option value="Envio de paquete">Envio de paquete</option>
              <option value="Envio de paquete pesado">Envio de paquete pesado</option>
              <option value="Envío de dinero">Envío de dinero</option>
              <option value="Compra">Compra</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Monto</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Ingrese el monto"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Cliente</label>
            <select
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Seleccione un cliente</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Agregar Servicio
            </button>
          </div>
        </form>
      </div>

      {/* Contabilidad */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contabilidad</h2>
        <p className="text-lg font-medium mb-4">
          Ingresos Totales: <span className="text-green-600">${totalIncome.toLocaleString()}</span>
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Tipo de Servicio</th>
              <th className="border border-gray-300 p-2">Monto</th>
              <th className="border border-gray-300 p-2">Fecha</th>
              <th className="border border-gray-300 p-2">Hora</th>
              <th className="border border-gray-300 p-2">Cliente</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="text-center">
                <td className="border border-gray-300 p-2">{service.id}</td>
                <td className="border border-gray-300 p-2">{service.type}</td>
                <td className="border border-gray-300 p-2">${service.amount.toLocaleString()}</td>
                <td className="border border-gray-300 p-2">{service.date}</td>
                <td className="border border-gray-300 p-2">{service.time}</td>
                <td className="border border-gray-300 p-2">{service.client}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulario para agregar o editar clientes */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          {editingClientId ? "Editar Cliente" : "Agregar Cliente"}
        </h2>
        <form onSubmit={handleAddClient} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={clientFormData.name}
              onChange={handleClientChange}
              className="w-full border rounded-lg p-2"
              placeholder="Nombre del cliente"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Teléfono</label>
            <input
              type="text"
              name="phone"
              value={clientFormData.phone}
              onChange={handleClientChange}
              className="w-full border rounded-lg p-2"
              placeholder="Teléfono del cliente"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Correo</label>
            <input
              type="email"
              name="email"
              value={clientFormData.email}
              onChange={handleClientChange}
              className="w-full border rounded-lg p-2"
              placeholder="Correo del cliente"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Dirección</label>
            <input
              type="text"
              name="address"
              value={clientFormData.address}
              onChange={handleClientChange}
              className="w-full border rounded-lg p-2"
              placeholder="Dirección del cliente"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {editingClientId ? "Guardar Cambios" : "Agregar Cliente"}
            </button>
          </div>
        </form>
      </div>

      {/* Base de datos de clientes */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Base de Datos de Clientes</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Nombre</th>
              <th className="border border-gray-300 p-2">Teléfono</th>
              <th className="border border-gray-300 p-2">Correo</th>
              <th className="border border-gray-300 p-2">Dirección</th>
              <th className="border border-gray-300 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(clients) && clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id} className="text-center">
                  <td className="border border-gray-300 p-2">{client.id}</td>
                  <td className="border border-gray-300 p-2">{client.name}</td>
                  <td className="border border-gray-300 p-2">{client.phone}</td>
                  <td className="border border-gray-300 p-2">{client.email}</td>
                  <td className="border border-gray-300 p-2">{client.address}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEditClient(client.id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-yellow-400"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteClient(client.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-400"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border border-gray-300 p-2 text-center">
                  No hay clientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
