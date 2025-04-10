import express from "express";
import connectDB from './config/db.js'


const app = express();
connectDB();

app.use("/", (req, res) => {
  res.send("Hola mundo");
});

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server connecting in port: ${ PORT }`);
});
