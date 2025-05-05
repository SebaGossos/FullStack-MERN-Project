import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <nav className="flex gap-4">
      <Link to="/admin/perfil" className="text-gray-500 uppercase font-bold">
        Perfil
      </Link>
      <Link to="/admin/cambiar-password" className="text-gray-500 uppercase font-bold">
        Cambiar Password
      </Link>
    </nav>
  );
};

export default AdminNav;
