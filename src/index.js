// import for librery
import express from "express";
import morgan from 'morgan'
import mongoose from 'mongoose';
import multer from "multer";
import path from 'path'
import {fileURLToPath} from 'url';



// import for dev
import { routerUser, routerTask } from "./routes/index.routes.js";



// instancias
const app = express();

// configuracion para que __dirname funcione como modulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configuracion para subir las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
// midelwere morgan
app.use(morgan('dev'))
app.use(multer({storage}).single('image')) // Configuración y .single() recibe como parametro el nombre del input que enviara o cargara la imagen
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// conexcion mongo
const DB_URI = 'mongodb://localhost:27017/smiletask-db'
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {
        console.error(err);
    }
})

// endpoints creados pasar usar en el front
// User
app.use('/api/user' ,routerUser)
// Task
app.use('/api/task', routerTask)




export { app }



