import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RutaProtegida() {
  const { auth, cargando } = useAuth();
  console.log( auth, cargando );

  if( cargando ) return "Cargando...";

  return (
    <>
      <h1>Esta es una ruta protegida</h1>

      { auth?._id ? <Outlet /> : <Navigate to="/" /> }
    </>
  );
}

export default RutaProtegida;