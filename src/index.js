// import for librery
import express from 'express';
import morgan from 'morgan'
import mongoose from 'mongoose';
import multer from "multer";
import path from 'path'
import {fileURLToPath} from 'url';
import { Server as socketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';




// import for dev
import { routerUser, routerTask, routerDataUser } from "./routes/index.routes.js"

// instancias
const app = express();
// instancia de socket io
const server = http.createServer(app)
const io = new socketServer(server)

// configuracion para que __dirname funcione como modulo
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// configuracion para subir las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
// midelwere morgan
app.use(cors())
app.use(morgan('dev'))
app.use(multer({storage}).single('image')) // Configuración y .single() recibe como parametro el nombre del input que enviara o cargara la imagen
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// conexcion mongo
const DB_URI = process.env.MONGODB_URI
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
// Information of user
app.use('/api/dataUser', routerDataUser)



export { app, server }



