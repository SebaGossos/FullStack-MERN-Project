export const register = (req, res) => {
  const { email, password, nombre } = req.body;

  res.json({ msg: "Registrando Usuario" });
};

export const profil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};
