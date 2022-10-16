// importacion del modelo de usuarios
import { Usuarios } from "../models/index.model.js"
import bcrypt from 'bcryptjs'

const userLogin = async (req, res) => {
    const usernameFront = req.body.username
    const { name, lastname, genero, image, email, password, username, numberPhone } = await Usuarios.findOne({username: usernameFront})
    const userData = { name, lastname, genero, image, email, username, numberPhone }
    let comparer = await bcrypt.compare(req.body.password, password)
    comparer ? res.json({response: true, ...userData}) : res.json({response: false, status: "Credential not found"})    
}

const userRegister = async (req, res) => {
    const { name, lastname, email, password, username, numberPhone, genero} = req.body
    let imageUser = ''
    genero == 'male' 
        ? imageUser = 'https://res.cloudinary.com/tauro-dev/image/upload/v1665850694/imageDefault_yx851c.png_desde_male' 
        : imageUser = 'https://res.cloudinary.com/tauro-dev/image/upload/v1665850694/imageDefault_yx851c.png_desde_female' 
    try {
        const userData = { name, lastname, genero, image: imageUser, email, username, numberPhone }
        await Usuarios.create({...userData, password: await bcrypt.hash(password, 8)})
        return res.json({...userData})
    } catch {
        return res.json({response: false})
    }
}

export { userLogin, userRegister }