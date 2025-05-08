import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta.tsx";
import clienteAxios from "../config/axios.tsx";
import type { Alert } from "../types.ts";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState<Alert>({} as Alert);

  const { token } = useParams();

  // Evita doble petición en StrictMode
  const peticionHecha = useRef(false);

  useEffect(() => {
    if (!token || peticionHecha.current) return;
    peticionHecha.current = true;
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${token}`;
        const { data } = await clienteAxios.get(url);

        setCuentaConfirmada(true);
        setAlerta({ msg: data.msg });

      } catch (error) {
        setAlerta({ msg: error.message, error });
        console.error("Error al confirmar la cuenta:", error);
        // Manejar el error, como mostrar un mensaje de error al usuario
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, [token]);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu cuenta y administra
          <span className="text-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <nav className="mt-10 md:flex justify-between">
            <Link className="block text-center my-5 text-gray-500" to="/">
              Inicia Sesión
            </Link>
          </nav>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
