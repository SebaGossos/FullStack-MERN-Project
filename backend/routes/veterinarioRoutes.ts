import express from "express";
const router = express.Router();

import { authenticate, confirm, profil, register } from "../controllers/veterinarioControllers.ts";

router.post("/", register);
router.get("/perfil", profil);
router.get("/confirmar/:token", confirm);
router.post("/login", authenticate)

export default router;
