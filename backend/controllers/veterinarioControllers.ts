import Veterinario from "../models/veterinarian.ts";
export const register = async (req, res) => {
  const { email } = req.body;

  // prevent indentifed user
  const existUser = await Veterinario.findOne({ email });
  if( existUser ) {
    const error = new Error('User has alredy been registered')
    return res.status(400).json({ msg: error.message })
  }

  try {
    // Save new veterinarian
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(333333333333333333333333333333333333333333)
    console.log(error);
  }
};

export const profil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};
