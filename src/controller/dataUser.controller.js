import { Usuarios } from "../models/index.model.js"
import fse from 'fs-extra'
import cloudinary from 'cloudinary'

const userImage = async (req, res) => {
    const { path } = req.file
    // await fse.unlink( path )
    res.send('imagen recivida')
}

export { userImage }