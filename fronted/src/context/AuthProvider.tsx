import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
} // Define el tipo de props que espera el AuthProvider

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const autenticarUsuario = async () => {
      // Lógica para autenticar al usuario
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, cargando }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
export default AuthProvider;