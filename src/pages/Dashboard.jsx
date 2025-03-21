import { useState } from "react";

const Dashboard = () => {
  const [services, setServices] = useState([
    { id: 1, type: "Envio de paquete", amount: 50000, date: "2023-10-01" },
    { id: 2, type: "Envio de paquete pesado", amount: 120000, date: "2023-10-02" },
    { id: 3, type: "Envío de dinero", amount: 30000, date: "2023-10-03" },
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: "Juan Pérez", phone: "3001234567", email: "juan@example.com" },
    { id: 2, name: "María López", phone: "3107654321", email: "maria@example.com" },
  ]);

  const totalIncome = Array.isArray(services)
    ? services.reduce((acc, service) => acc + service.amount, 0)
    : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Administrativo</h1>

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
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="text-center">
                <td className="border border-gray-300 p-2">{service.id}</td>
                <td className="border border-gray-300 p-2">{service.type}</td>
                <td className="border border-gray-300 p-2">${service.amount.toLocaleString()}</td>
                <td className="border border-gray-300 p-2">{service.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="text-center">
                <td className="border border-gray-300 p-2">{client.id}</td>
                <td className="border border-gray-300 p-2">{client.name}</td>
                <td className="border border-gray-300 p-2">{client.phone}</td>
                <td className="border border-gray-300 p-2">{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
