import express from "express";
import { addPaciente, deletePaciente, getPaciente, getPacientes, udpatePaciente } from "../controllers/pacienteControllers.ts";
import checkAuth from "../middleware/authMiddleware.ts";

const router = express.Router();

router.route("/").post(checkAuth, addPaciente).get(checkAuth, getPacientes);
router.route("/:id").get(checkAuth, getPaciente).put(checkAuth, udpatePaciente).delete(checkAuth, deletePaciente)

export default router;
