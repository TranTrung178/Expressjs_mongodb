import { ObjectId } from "mongodb"
import mongoose, { Schema } from "mongoose"
import isEmail from "validator/lib/isemail.js"

export default mongoose.model('Class',
    new Schema({
        id: {type: ObjectId},
        name: {
            type: String,
            require: true,
            validate: {
                validator: (value) => value.length > 3,
                message: "Username must be at least 3 characters"
            }
        }

    })
)