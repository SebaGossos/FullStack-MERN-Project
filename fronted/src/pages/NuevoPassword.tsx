import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta.tsx";
import clienteAxios from "../config/axios.tsx";
import { Link } from "react-router-dom";

function NuevoPassword() {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({ msg: "", error: false });
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const token = useParams()?.token; // Si estás usando React Router v6 o superior
  // const token = window.location.pathname.split("/").pop(); // Si estás usando una versión anterior de React Router

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para verificar el token
    // y permitir al usuario restablecer su contraseña.
    const checkToken = async () => {
      try {
        await clienteAxios.get(`veterinarios/olvide-password/${token}`);
        setAlerta({ msg: "Coloca tu nuevo password", error: false });
        setTokenValido(true);
      } catch (error: any) {
        console.log(error.message);
        setAlerta({ msg: "Hubo un error con el enlace", error });
      }
    };
    checkToken();
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({ msg: "El password debe ser de al menos 6 caracteres", error: true });
      return;
    }

    setAlerta({ msg: "", error: false });

    // Llamar a la API para guardar el nuevo password
    const resetPassword = async () => {
      try {
        const { data } = await clienteAxios.post(`veterinarios/olvide-password/${token}`, { password });
        setAlerta({ msg: data.msg });
        setPasswordModificado(true);
        setTokenValido(false); // Deshabilitar el formulario después de cambiar la contraseña
      } catch (error: any) {
        setAlerta({ msg: error.message, error: true });
      }
    };
    resetPassword();
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Reestablece tu password y no pierdas acceso a <span className="text-black"> tus Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alerta.msg && <Alerta alerta={alerta} />}
        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
                  Nuevo password
                </label>
                <input type="password" placeholder="Tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <input type="submit" value="Guardar nuevo Password" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />
            </form>
          </>
        )}
        {passwordModificado && (
          <Link className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " to="/">
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
}

export default NuevoPassword;
