

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Solicita = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    senderName: '',
    senderAddress: '',
    senderPhone: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhone: '',
    serviceType: '',
    serviceNote: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.senderName ||
      !formData.senderAddress ||
      !formData.senderPhone ||
      !formData.receiverName ||
      !formData.receiverAddress ||
      !formData.receiverPhone ||
      !formData.serviceType
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const message = `Formulario de Solicitud de Servicio:\n\nQuien Envia:\nNombre: ${formData.senderName}\nDirección: ${formData.senderAddress}\nCelular: ${formData.senderPhone}\n\nQuien Recibe:\nNombre: ${formData.receiverName}\nDirección: ${formData.receiverAddress}\nCelular: ${formData.receiverPhone}\n\nTipo de Servicio: ${formData.serviceType}\nNota del Envío: ${formData.serviceNote}`;
    const whatsappUrl = `https://wa.me/573015478439?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      senderName: '',
      senderAddress: '',
      senderPhone: '',
      receiverName: '',
      receiverAddress: '',
      receiverPhone: '',
      serviceType: '',
      serviceNote: ''
    });
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full sm:w-3/4 lg:w-2/3 bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={() => navigate('/')} className="mb-7 text-[#000735] hover:text-blue-700">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8 text-center">Formulario para solicitar servicio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Quien envia</h2>
            <label className="mb-2">Nombre</label>
            <input type="text" name="senderName" value={formData.senderName} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <label className="mb-2">Dirección</label>
            <input type="text" name="senderAddress" value={formData.senderAddress} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <label className="mb-2">Celular</label>
            <input type="text" name="senderPhone" value={formData.senderPhone} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Quien recibe</h2>
            <label className="mb-2">Nombre</label>
            <input type="text" name="receiverName" value={formData.receiverName} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <label className="mb-2">Dirección</label>
            <input type="text" name="receiverAddress" value={formData.receiverAddress} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <label className="mb-2">Celular</label>
            <input type="text" name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Tipo de servicio</h2>
            <label className="mb-2">Seleccione</label>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="border rounded-lg p-2 mb-4">
              <option value="">Seleccione</option>
              <option value="Envio de paquete">Envio de paquete</option>
              <option value="Envio de paquete pesado">Envio de paquete pesado</option>
              <option value="Envío de dinero">Envío de dinero</option>
              <option value="Compra">Compra</option>
            </select>
            <label className="mb-2">Nota del envío</label>
            <textarea name="serviceNote" value={formData.serviceNote} onChange={handleChange} className="border rounded-lg p-2 mb-4" rows="4"></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <button onClick={handleSubmit} className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Solicitar
          </button>
          <button onClick={handleClear} className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solicita;