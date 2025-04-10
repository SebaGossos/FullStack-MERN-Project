import express from "express";
const router = express.Router();

import { profil, register } from "../controllers/veterinarioControllers.ts";

router.post('/', register)

router.get('/perfil', profil)

export default router;