// importacion del modelo de usuarios
import { Task } from "../models/index.model.js"

const taskFind = (req, res) => {
    res.send('hola desde el controlador')
}

const taskCreate = async (req, res) => {
    try {
        await Task.create(
            {
                important: req.body.important,
                title: req.body.title,
                time: req.body.time,
                description: req.body.description
            }
        )
        return res.send('Tarea creada')
    } catch {
        return res.send('No estas ingresando los tipos de datos correctos')
    }
}

export { taskFind, taskCreate }