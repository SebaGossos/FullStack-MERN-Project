const Paciente = ({ paciente }) => {
  const { email, fecha, nombre, propietario, sintomas, _id } = paciente;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-gray-500">
        Nombre: {''}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
    </div>
  );
};

export default Paciente;
