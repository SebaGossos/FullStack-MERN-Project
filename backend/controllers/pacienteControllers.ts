import Paciente from "../models/Paciente.ts";
import Veterinario from "../models/Veterinarian";

export const addPaciente = async (req, res) => {
  const newPaciente = req.body;
  const { _id } = req.veterinario;
  const paciente = new Paciente(newPaciente);
  paciente.veterinario = _id;

  try {
    const savedPaciente = await paciente.save();
    return res.json(savedPaciente);
  } catch (error) {
    console.log(error);
  }
};

export const getPacientes = async (req, res) => {
  const pacientes = await Paciente.find().where("veterinario").equals(req.veterinario);

  res.json(pacientes);
};

export const getPaciente = async (req, res) => {
  const { id } = req.params;
  const paciente = await Paciente.findById(id);

  if (!paciente) return res.status(404).json({ msg: "not found Paciente or Veterinario" });
  
  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }

  return res.json(paciente);
};

export const udpatePaciente = async (req, res) => {
  const { id } = req.params;
  const paciente = await Paciente.findById(id);

  if (!paciente) return res.status(404).json({ msg: "not found Paciente or Veterinario" });

  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }

  // update Paciente
  paciente.nombre = req.body.nombre || paciente.nombre
  paciente.propietario = req.body.propietario || paciente.propietario
  paciente.email = req.body.email || paciente.email
  paciente.fecha = req.body.fecha || paciente.fecha
  paciente.sintomas = req.body.sintomas || paciente.sintomas

  try {
    const updatedPacient = await paciente.save()
    res.json( updatedPacient )
  } catch (error) {
    console.log(error)
  }

};

export const deletePaciente = async (req, res) => {
  const { id } = req.params;
  const paciente = await Paciente.findById(id);

  if (!paciente) return res.status(404).json({ msg: "not found Paciente or Veterinario" });

  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Accion no valida" });
  }
  try {
    await paciente.deleteOne()
    res.json({msg: 'Paciente Eliminado'})
  } catch (error) {
    console.log(error)
  }
};
