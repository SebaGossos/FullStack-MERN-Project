import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Registrar from "./pages/Registrar.tsx";
import OlvidePassword from "./pages/OlvidePassword.tsx";
import NuevoPassword from "./pages/NuevoPassword.tsx";
import ConfirmarCuenta from "./pages/ConfirmarCuenta.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { PacientesProvider } from "./context/PacientesProvider.tsx";

import RutaProtegida from "./layout/RutaProtegida.tsx";
import AdministrarPacientes from "./pages/AdministrarPacientes.tsx";

function App() {
  return (
    <BrowserRouter>
      <PacientesProvider>
        <AuthProvider>
          <Routes>
            // Rutas Publicas
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
            </Route>
            // Ruta protegida
            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
            </Route>
          </Routes>
        </AuthProvider>
      </PacientesProvider>
    </BrowserRouter>
  );
}

export default App;
