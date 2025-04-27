import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta.tsx";
import clienteAxios from "../config/axios.tsx";



interface AlertaType {
  msg: string;
  error?: boolean;
}

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState<AlertaType | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (email === "" || email.length < 6) {
      setAlerta({ msg: "El email es obligatorio", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/veterinarios/olvide-password", { email });
      setAlerta({ msg: data.msg });
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Recupera tu acceso y no pierdas <span className="text-black"> tus Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alerta && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Email
            </label>
            <input type="email" placeholder="Email de registro" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <input type="submit" value="Enviar Instrucciones" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />
        </form>

        <nav className="mt-10 md:flex justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Inicia Sesión
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/registrar">
            Registrarme
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
