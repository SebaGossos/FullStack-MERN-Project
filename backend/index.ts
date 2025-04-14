import express from "express";
import connectDB from "./config/db.ts";
import veterinarioRoutes from "./routes/veterinarioRoutes.ts";
import pacienteRoutes from "./routes/pacienteRoutes.ts";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server connecting in port: ${PORT}`);
});
