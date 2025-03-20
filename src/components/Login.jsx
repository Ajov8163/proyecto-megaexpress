import { useState } from "react";

const Login = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [isRecover, setIsRecover] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {!isRecover ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
            </h2>
            <form>
              {isRegister && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2 text-black ">Nombre</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-black">Correo</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  placeholder="Ingresa tu correo"
                />
              </div>
              {!isRecover && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 text-black">Contraseña</label>
                  <input
                    type="password"
                    className="w-full border rounded-lg p-2"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
              </button>
            </form>
            <div className="mt-4 text-center">
              {!isRegister && (
                <button
                  onClick={() => setIsRecover(true)}
                  className="text-blue-900 hover:underline text-sm"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              )}
              <p className="text-sm mt-2 text-black">
                {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
                <button
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-blue-900 hover:underline"
                >
                  {isRegister ? "Inicia Sesión" : "Regístrate"}
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Recuperar Contraseña</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-black">Correo</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  placeholder="Ingresa tu correo"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Recuperar Contraseña
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsRecover(false)}
                className="text-blue-900 hover:underline text-sm"
              >
                Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
