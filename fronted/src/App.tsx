import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Registrar from "./pages/Registrar.tsx";
import OlvidePassword from "./pages/OlvidePassword.tsx";
import NuevoPassword from "./pages/NuevoPassword.tsx";
import ConfirmarCuenta from "./pages/ConfirmarCuenta.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
