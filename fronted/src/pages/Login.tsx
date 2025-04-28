import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta.tsx";
import clienteAxios from "../config/axios.tsx";

function Login() {
  const [alerta, setAlerta] = useState({ msg: "", error: false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();

    if([email, password].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      const {data} = await clienteAxios.post("/veterinarios/login", { email, password });
      setAlerta({ msg: data.msg, error: false });
      localStorage.setItem('token', data.token)
      // localStorage.setItem("token", data.token);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    } 

  }


  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Inicia Sesión y Administra tus <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={ handleSubmit }>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Email
            </label>
            <input type="email" value={ email } onChange={  e => setEmail( e.target.value )} placeholder="Email de Registro" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Password
            </label>
            <input type="password" value={ password } onChange={  e => setPassword( e.target.value )} placeholder="Tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>

          <input type="submit" value="Iniciar Sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />
        </form>

        <nav className="mt-10 md:flex justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/registrar">
            ¿No tienes una cuenta? Registrate
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/olvide-password">
            Olvide Mi Password
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Login;
