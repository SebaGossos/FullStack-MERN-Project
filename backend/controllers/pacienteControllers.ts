import Paciente from "../models/Paciente.ts";

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

export const getPaciente = async(req, res) => {
  const pacientes = await Paciente.find().where('veterinario').equals(req.veterinario);

  res.json(pacientes)
};
