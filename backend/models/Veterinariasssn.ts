import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import generateId from "../helpers/generateID.ts";

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
    trim: true,
    default: null,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    unique: true,
    default: generateId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

veterinarianSchema.pre("save", async function (next) {
  // if password is hashed continue.
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  } catch (error) {
    console.log(error);
  }
});

veterinarianSchema.methods.checkPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

const Veterinario = mongoose.model("Veterinario", veterinarianSchema);
export default Veterinario;
