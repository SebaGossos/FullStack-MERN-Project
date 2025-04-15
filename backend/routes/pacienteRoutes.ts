import express from "express";
import { addPaciente, getPaciente } from "../controllers/pacienteControllers.ts";
import checkAuth from "../middleware/authMiddleware.ts";

const router = express.Router();

router.route("/").post(checkAuth, addPaciente).get(checkAuth, getPaciente);

export default router;
