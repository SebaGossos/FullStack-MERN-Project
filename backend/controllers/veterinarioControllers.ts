import Veterinario from "../models/Veterinarian.ts";
export const register = async (req, res) => {
  const { email } = req.body;

  // prevent indentifed user
  const existUser = await Veterinario.findOne({ email });
  if (existUser) {
    const error = new Error("User has alredy been registered");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Save new veterinarian
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

export const profil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};

export const confirm = async (req, res) => {
  const { token } = req.params;

  const userConfirm = await Veterinario.findOne({ token });

  if (!userConfirm) {
    const error = new Error("invalid token");
    return res.status(404).json({ msg: error.message });
  }
  try {
    userConfirm.token = null;
    userConfirm.confirmado = true;
    await userConfirm.save();

    res.json({ msg: "User Confirm Correctly" });
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = async (req, res) => {
  const { email, password:passwordForm } = req.body;

  // check if user exist
  const user = await Veterinario.findOne({ email });
  if (!user) {
    const error = new Error("User does not exist ");
    return res.status(403).json({ msg: error.message });
  }
  
  // check if user is confirm or not
  if( !user.confirmado ) {
    const error = new Error("User does not confirm");
    return res.status(403).json({ msg: error.message });
  }
  // Check user
  if( await user.checkPassword(passwordForm) ){
    res.json('password correctly')
  } else {
    const error = new Error("Incorrect Password");
    return res.status(403).json({ msg: error.message });
  }


};
