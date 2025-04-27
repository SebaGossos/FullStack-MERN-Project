import express from "express";
import cors from "cors";
import connectDB from "./config/db.ts";
import veterinarioRoutes from "./routes/veterinarioRoutes.ts";
import pacienteRoutes from "./routes/pacienteRoutes.ts";

const app = express();
app.use(express.json());

connectDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
      // El origen está en la lista de permitidos o es una solicitud sin origen (como Postman)
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server connecting in port: ${PORT}`);
});
