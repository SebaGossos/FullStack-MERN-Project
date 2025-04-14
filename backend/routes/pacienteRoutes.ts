import express from "express";
import { addPaciente, getPaciente } from "../controllers/pacienteControllers.ts";
const router = express.Router()

router.route('/').get(getPaciente).post(addPaciente)

export default router;
