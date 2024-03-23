import { ObjectId } from "mongodb"
import mongoose, { Schema } from "mongoose"
import isEmail from "validator/lib/isemail.js"

export default mongoose.model('Student',
    new Schema({
        id: {type: ObjectId},
        name: {
            type: String,
            require: true,
            validate: {
                validator: (value) => value.length > 3,
                message: "Username must be at least 3 characters"
            }
        },
        email: {
            type: String,
            require: true,
            validate: {
                validator: (value) => isEmail,
                message: "Email is incorrect format"
            }
        },
        languages: {
            type: [String]
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'Femail'],
                message: '{VALUE} is not supported'

            },
            require: true,
        },
        phoneNumber: {
            type: String,
            require: true,
            validate: {
                validator: (value) => value.length > 5,
                message: "PhoneNumber must be at least 3 characters"
            }
        },
        address: {
            type: String,
            require: true,
        }

    })
)