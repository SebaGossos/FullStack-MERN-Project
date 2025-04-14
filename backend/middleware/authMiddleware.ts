import jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinarian.ts";

const checkAuth = async (req, res, next) => {
  const tokenWithBearer: String = req.headers.authorization;
  let token: String;

  if (tokenWithBearer && tokenWithBearer.startsWith("Bearer")) {
    try {
      token = tokenWithBearer.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.veterinario = await Veterinario.findById(decoded.id).select("-password -token -confirmado");

      return next();
    } catch (error) {
      const err = new Error("Invalid token");
      return res.status(403).json({ msg: err.message });
    }
  }
  if (!token) {
    const err = new Error("Invalid or not-existent token");
    return res.status(403).json({ msg: err.message });
  }

  return next();
};

export default checkAuth;
