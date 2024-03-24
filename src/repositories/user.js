import { User } from "../models/index.js"
import Exception from "../exceptions/Exception.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async ({ email, password }) => {
    let existUser = await User.findOne({ email }).exec()
    if (existUser)
    {
        // let isMatch = await bcrypt.compare(password, existUser.password)
        let isMatch = password === existUser.password
        if (!!isMatch){

            let token = jwt.sign({
                data: existUser
            }, 
                process.env.JWT_SECRET, {
                    // expiresIn: '60' //1 minute
                    expiresIn: '30 days'
                })
            return {
                ...existUser.toObject(),
                password: 'not show',
                token: token
            }

        } else{
            throw new Exception(Exception.WRONG_USERNAME_PW)
        }
    } else{
        throw new Exception(Exception.WRONG_USERNAME_PW)
    }


}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {

    try {
        let existingUser = await User.findOne({ email }).exec()
        if (!!existingUser) {
            throw new Exception(Exception.USER_EXIST)
        }

        //encrypt password
        // const isMachted = await bcrypt.compare(password, existingUser.password)
        // if(!!isMachted){

        // }

        // const hasedPW = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))

        const newUser = await User.create({
            name, email,
            // password: hasedPW,
            password,
            phoneNumber,
            address
        })
        return newUser
    } catch (error) {
        throw new Exception(Exception.CANOOT_REGISTER_USER)

    }
    // console.log (`register ${name + email + password + phoneNumber }`)
}

export default {
    login,
    register
}