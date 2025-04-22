import React from "react";

interface AlertaProps {
  alerta: {
    msg: string;
    error?: boolean;
  };
}

const Alerta: React.FC<AlertaProps> = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? "from-red-400 to-red-600" : "from-indigo-400"} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`} role="alert">
      {alerta.msg}
    </div>
  );
};

export default Alerta;
