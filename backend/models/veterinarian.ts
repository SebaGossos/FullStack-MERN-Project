import mongoose from "mongoose";

const { Schema } = mongoose;

const veterinarianSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: true,
  },
  token: {},
  confirmado: {
    type: Boolean,
    default: false,
  },
});

const Veterinario = mongoose.model('Veterinario', veterinarianSchema)
export default Veterinario;