import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios.tsx";

interface AuthProviderProps {
  children: React.ReactNode;
} // Define el tipo de props que espera el AuthProvider

const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios.get("/veterinarios/perfil", config);
        setAuth( data);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }
    };
    autenticarUsuario();
  }, []);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
