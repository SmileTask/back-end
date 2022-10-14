// importacion de las librerias
import mongoose from "mongoose";

// importacion de desarrollo
import { userSchema } from "../schema/user.schema.js";

const Usuarios = new mongoose.model('usuarios', userSchema)

export {
    Usuarios
}