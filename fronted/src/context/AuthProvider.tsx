import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios.tsx";
import type { AuthContextType } from "../types.ts";

interface AuthProviderProps {
  children: React.ReactNode;
} // Define el tipo de props que espera el AuthProvider

const AuthContext = createContext<AuthContextType>({} as AuthContextType);


const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCargando(false);
      return false;
    }

    return {
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${token}`,
      },
    };
  };
  useEffect(() => {
    const autenticarUsuario = async () => {
      const config = getAuthConfig();
      if (!config) return;

      try {
        const { data } = await clienteAxios.get("/veterinarios/perfil", config);
        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  const actualizarPerfil = async (perfil) => {
    const config = getAuthConfig();
    if (!config) return;

    try {
      const { data } = await clienteAxios.put(`/veterinarios/perfil/${perfil._id}`, perfil, config);
      setAuth(data);
      return {
        msg: "Guardado Correctamente",
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const guardarPassword = async (password) => {
    const config = getAuthConfig();
    if (!config) return;

    try {
      const { data } = await clienteAxios.put("/veterinarios/actualizar-password", password, config);
      return {
        msg: data.msg
      }
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true
      }
    }
  };

  return <AuthContext.Provider value={{ auth, setAuth, cargando, cerrarSesion, actualizarPerfil, guardarPassword, getAuthConfig }}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
