import Veterinario from "../models/Veterinarian.ts";
import generateJWT from "../helpers/generateJWT.ts";
import generateId from "../helpers/generateID.ts";
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
  const { veterinario } = req;
  res.json({ profil: veterinario });
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
  const { email, password: passwordForm } = req.body;

  // check if user exist
  const user = await Veterinario.findOne({ email });
  if (!user) {
    const error = new Error("User does not exist ");
    return res.status(403).json({ msg: error.message });
  }

  // check if user is confirm or not
  if (!user.confirmado) {
    const error = new Error("User does not confirm");
    return res.status(403).json({ msg: error.message });
  }
  // Check user
  if (await user.checkPassword(passwordForm)) {
    res.json({ token: generateJWT(user.id) });
  } else {
    const error = new Error("Incorrect Password");
    return res.status(403).json({ msg: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  const existeVeterinario = await Veterinario.findOne({ email });

  if (!existeVeterinario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    existeVeterinario.token = generateId();
    await existeVeterinario.save();
    return res.json({ msg: "Hemos enviado un email" });
  } catch (error) {
    console.log(error);
  }
};

export const checkToken = async (req, res) => {
  const { token } = req.params;
  const checkToken = await Veterinario.findOne({ token });
  if (checkToken) {
    // token is valid user exist
    res.json({msg: 'Valid Token, user exist'})
  } else {
    const error = new Error("Invalid Token");
    res.status(400).json({ msg: error.message });
  }
};

export const newPassword = async (req, res) => {};
