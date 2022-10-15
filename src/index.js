// import for librery
import express from "express";
import morgan from 'morgan'
import mongoose from 'mongoose';

// import for dev
import { routerUser, routerTask } from "./routes/index.routes.js";



// instancias
const app = express();

// midelwere morgan
app.use(morgan('dev'))
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



