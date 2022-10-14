// import for librery
import express from "express";
import morgan from 'morgan'
import mongoose from 'mongoose';

// import for dev
import { routerHome } from "./routes/index.routes.js";

// instancias
const app = express();


// function conect at mongodb
const mongoConection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/smiletask-app');
        return 'successfully connected'
    } catch (error) {
        throw error
    }
}
// conexcion mongo
mongoConection()
    .then(res => console.log(res))
    .catch(err => console.log(err))

    

// uso de morgan en la app
app.use(morgan('tiny'))
app.use('/api/user' ,routerHome)



export { app }



