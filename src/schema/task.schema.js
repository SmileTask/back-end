import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(
    {
        important: {
            type: Boolean,
            require: true,
            default: false
        },
        title: {
            type: String,
            require: true
        },
        time: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        author: {
            type: mongoose.Types.ObjectId
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export {
    taskSchema
}