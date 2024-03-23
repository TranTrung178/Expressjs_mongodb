import { User } from "../models/index.js"
import Exception from "../exceptions/Exception.js"
import bcrypt from 'bcrypt'
const login = async ({email, password}) => {
    console.log('login user success, good good')
    
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {

    try {
        debugger
        let existingUser = await User.findOne({email}).exec()
        if (!!existingUser){
            throw new Exception(Exception.USER_EXIST)
        }

        //encrypt password
        // const isMachted = await bcrypt.compare(password, existingUser.password)
        // if(!!isMachted){

        // }

        const hasedPW = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))

        const newUser = await User.create({
            name, email, 
            password: hasedPW,
            phoneNumber,
            address
        })
        return newUser
    } catch (error) {
    debugger
        throw new Exception(Exception.CANOOT_REGISTER_USER)
        
    }
    // console.log (`register ${name + email + password + phoneNumber }`)
}

export default {
    login,
    register
}