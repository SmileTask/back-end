// importacion de las librerias
import mongoose from "mongoose";

// importacion de desarrollo
import { taskSchema } from "../schema/task.schema.js";

const Task = new mongoose.model('tareas', taskSchema)

export {
    Task
}