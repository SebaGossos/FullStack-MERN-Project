import Paciente from "../models/Paciente.ts";
import Veterinario from '../models/Veterinarian';

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
  const paciente = await Paciente.findById(id)
  if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({msg: 'Accion no valida'})
  }
  if(paciente){
    res.json(paciente )
  }
};

export const udpatePaciente = async (req, res) => {

};

export const deletePaciente = async (req, res) => {};
