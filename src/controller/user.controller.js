// importacion del modelo de usuarios
import { Usuarios } from "../models/index.model.js"

const apiUserGet = (req, res) => {
    res.send('hola desde el controlador')
}

const apiUserPost = (req, res) => {
    Usuarios.create(
        {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            numberPhone: req.body.numberPhone
        }
    )
    res.send('Usuario creado')
}

export { apiUserGet, apiUserPost }