import express from "express";
const router = express.Router();

import { authenticate, confirm, profil, register } from "../controllers/veterinarioControllers.ts";

import checkAuth from "../middleware/authMiddleware.ts";

router.post("/", register);
router.get("/confirmar/:token", confirm);
router.post("/login", authenticate);

router.get("/perfil", checkAuth, profil);

export default router;
