import { createContext, useContext, useState } from "react";
import clienteAxios from "../config/axios";


const PacientesContext = createContext({});


export const PacientesProvider = ({ children }) => {

  const [pacientes, setPacientes] = useState([]);

  
  return (
    <PacientesContext.Provider value={{
      pacientes
    }}>
      { children }
    </PacientesContext.Provider>
  )
};


export default PacientesContext