import { Usuarios } from "../models/index.model.js"
import fse from 'fs-extra'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv' //configuracion de variables de entorno
dotenv.config()

// configuracion de cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

// actualizar y borrar imagen existente de cloudinary
const userImage = async (req, res) => {
    try {
        const { username } = req.body
        const { public_key } = await Usuarios.findOne({username})
        //destrucción de la imagen antigua en la base de datos
        public_key ? cloudinary.uploader.destroy(public_key) : ''
        const { path } = req.file
        const { public_id } = await cloudinary.uploader.upload(path)
        await fse.unlink( path )
        const imageTransform = cloudinary.url(public_id, {transformation: [{ width: 500, height: 500, gravity: 'faces', crop: 'fill' }]})
        //actualización de los datos en la database
        await Usuarios.updateOne({username},{image: imageTransform, public_key: public_id }, {runValidators: true})
        return res.json({image: "succesful update"})
    } catch {
        return res.send('error en el sistema')
    }
}

// borrar la imagen y dejar la imagen por default del sistema
const userImageDelete = async (req, res) => {
    try {
        const { username, genero } = req.body
        let imageDefault = ''
        const { public_key } = await Usuarios.findOne({username})
        genero == 'male' 
            ? imageDefault = 'https://res.cloudinary.com/tauro-dev/image/upload/v1665850694/imageDefault_yx851c.png_desde_male'
            : imageDefault = 'https://res.cloudinary.com/tauro-dev/image/upload/v1665850694/imageDefault_yx851c.png_desde_female'
        await Usuarios.updateOne({ username },{image: imageDefault, public_key: '' }, {runValidators: true})
        cloudinary.uploader.destroy(public_key)
        res.json({image: "succesful delete"})
    } catch {
        return res.send ('error de servidor')
    }
}

export { userImage,userImageDelete }