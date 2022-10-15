import { Usuarios } from "../models/index.model.js"
import fse from 'fs-extra'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

// configuracion de cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

const userImage = async (req, res) => {
    const { path } = req.file
    const { public_id } = await cloudinary.uploader.upload(path)
    let imageTransform = cloudinary.url(public_id, {
        transformation: [
            { width: 600, height: 600, gravity: 'faces', crop: 'thumb' }
        ]
    })
    console.log(imageTransform);
    await fse.unlink( path )
    res.send('imagen recivida')
}

export { userImage }