import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: false
        },
        image: {
            type: String,
            default: 'https://res.cloudinary.com/tauro-dev/image/upload/v1665850694/imageDefault_yx851c.png',
            require: false
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true,
            unique: true
        },
        numberPhone: {
            type: String,
            default: '123-456'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export {
    userSchema
}