import express from "express";
const router = express.Router();

import { authenticate, confirm, profil, register, forgetPassword, checkToken, newPassword, updateProfile } from "../controllers/veterinarioControllers.ts";

import checkAuth from "../middleware/authMiddleware.ts";

// public area
router.post("/", register);
router.get("/confirmar/:token", confirm);
router.post("/login", authenticate);
router.post("/olvide-password", forgetPassword);
router.route("/olvide-password/:token").get(checkToken).post(newPassword);

// private area
router.get("/perfil", checkAuth, profil);
router.put("/perfil/:id", checkAuth, updateProfile);

export default router;
