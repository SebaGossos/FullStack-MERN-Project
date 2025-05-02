import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function RutaProtegida() {
  const { auth, cargando } = useAuth();
  console.log( auth, cargando );

  if( cargando ) return "Cargando...";

  return (
    <>
      <Header />
      { auth?._id ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : <Navigate to="/" /> }
      <Footer />
    </>
  );
} 

export default RutaProtegida;