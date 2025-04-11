import express from "express";
const router = express.Router();

import { confirm, profil, register } from "../controllers/veterinarioControllers.ts";

router.post("/", register);
router.get("/perfil", profil);
router.get("/confirmar/:token", confirm);

export default router;
