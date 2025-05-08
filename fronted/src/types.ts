export type Pacient = {
  _id?: string;
  id?: string;
  nombre: string;
  propietario: string;
  email: string;
  fecha: string;
  sintomas: string;
};

export type Alert = {
  msg: string;
  error?: boolean;
};

export interface Perfil {
  nombre: string;
  email: string;
  web?: string;
  telefono?: string;
}

export type PacientesContextType = {
  guardarPaciente: (paciente: Pacient) => Promise<void>;
  paciente: Pacient;
  pacientes: Pacient[];
  setEdicion: (paciente: Pacient) => void;
  eliminarPaciente: (id: string) => Promise<void>;
};

export type AuthContextType = {
  auth: any; // Cambia 'any' por el tipo real si lo tienes
  setAuth: React.Dispatch<React.SetStateAction<any>>;
  cargando: boolean;
  cerrarSesion: () => void;
  actualizarPerfil: (perfil: any) => Promise<{ msg: string; error?: boolean }>;
  guardarPassword: (password: any) => Promise<{ msg: string; error?: boolean }>;
  getAuthConfig: () => false | { headers: { "Content-Type": string; Authorization: string } };
};
