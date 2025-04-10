import Veterinario from "../models/veterinarian.ts";
export const register = async(req, res) => {
  // const { email, password, nombre } = req.body;

  try {
    // Save new veterinarian
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log( error )
  }

};

export const profil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};
