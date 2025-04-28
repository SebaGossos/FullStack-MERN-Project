import { useState, useEffect, createContext } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
} // Define el tipo de props que espera el AuthProvider



const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      // Lógica para autenticar al usuario

    };
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthProvider };
export default AuthContext;