// importacion del modelo de usuarios
import { Usuarios } from "../models/index.model.js"
import bcrypt from 'bcryptjs'

const userLogin = async (req, res) => {
    const username = req.body.username
    const userFind = await Usuarios.findOne({username: username})
    let comparer = await bcrypt.compare(req.body.password, userFind.password)
    comparer ? res.json({response: true, userFind}) : res.json({response: false, status: 'Fatal Error'})    
}

const userRegister = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 8),
            username: req.body.username,
            numberPhone: req.body.numberPhone
        }
        await Usuarios.create({...userData})
        return res.send('Usuario creado')
    } catch {
        return res.send('Ya existe el username en la base de datos')
    }
}

export { userLogin, userRegister }