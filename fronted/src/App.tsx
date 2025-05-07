import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar los componentes de las rutas
import AuthLayout from "./layout/AuthLayout.tsx";
import RutaProtegida from "./layout/RutaProtegida.tsx";

// Importar las páginas de autenticación
import Login from "./pages/Login.tsx";
import Registrar from "./pages/Registrar.tsx";
import OlvidePassword from "./pages/OlvidePassword.tsx";
import NuevoPassword from "./pages/NuevoPassword.tsx";
import ConfirmarCuenta from "./pages/ConfirmarCuenta.tsx";

// Importar las páginas de administración
import AdministrarPacientes from "./pages/AdministrarPacientes.tsx";
import EditarPerfil from "./pages/EditarPerfil.tsx";
import CambiarPassword from "./pages/CambiarPassword.tsx";

// Importar los contextos
import { AuthProvider } from "./context/AuthProvider.tsx";
import { PacientesProvider } from "./context/PacientesProvider.tsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
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
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
