import { Outlet } from "react-router-dom";

function RutaProtegida() {
  return (
    <>
      <h1>Esta es una ruta protegida</h1>
      <Outlet />
    </>
  );
}

export default RutaProtegida;
