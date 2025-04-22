import { useState } from "react";
import { Link } from "react-router-dom";
const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu cuenta y administra <span className="text-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Nombre
            </label>
            <input type="email" placeholder="Tu nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={nombre} onChange={ e => setNombre(e.target.value)} />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="" >
              Email
            </label>
            <input type="email" placeholder="Email de Registro" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={ e => setEmail(e.target.value)}/>
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Password
            </label>
            <input type="password" placeholder="Tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={ e => setPassword(e.target.value)}/>
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
              Repetir Password
            </label>
            <input type="password" placeholder="Repite tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"  value={password2} onChange={ e => setPassword2(e.target.value)}/>
          </div>

          <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />
        </form>

        <nav className="mt-10 md:flex justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Inicia Sesión
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/olvide-password">
            Olvide Mi Password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
