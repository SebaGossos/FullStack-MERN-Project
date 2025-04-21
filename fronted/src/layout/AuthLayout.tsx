import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  return (
    <>
      <h1>Administrador de Pacientes de Veterinario</h1>
      <Outlet />
      <h1>Administrador de Pacientes de Veterinario</h1>
    </>
  )
}

export default AuthLayout
