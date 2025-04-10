import express from "express";
import connectDB from './config/db.ts'
import veterinarioRoutes from "./routes/veterinarioRoutes.ts";

const app = express();
connectDB();

app.use("/api/veterinarios", veterinarioRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server connecting in port: ${ PORT }`);
});
