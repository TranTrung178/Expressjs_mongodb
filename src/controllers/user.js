import { body, param, validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js'
import {EventEmitter} from 'node:events'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'
const myEvent = new EventEmitter()

myEvent.on('event.register.user', (params) => {
    console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ error: error.array() });
    }

    const { email, password } = req.body

    await userRepository.login({ email, password })

    res.status(HttpStatusCode.OK).json({
        message: 'Login successfully'
    })
}

const getUser = async (req, res) => {
    res.status(HttpStatusCode.OK).json({
        message: 'Get user successfully'
    })
}

const getUserDetail = async (req, res) => {
    res.status(HttpStatusCode.OK).json({
        message: 'GET users by id successfully ' + req?.params?.id + ""
    })
}

const register = async (req, res) => {

    const {
        name,
        email,
        password,
        phoneNumber,
        address
    } = req.body

    await userRepository.register( {name, email, password, phoneNumber, address} )

    myEvent.emit('event.register.user', {email, phoneNumber})

    res.status(HttpStatusCode.INSERT_OK).json({
        message: 'POST register user successfully'
    })
}

export default {
    login,
    getUser,
    getUserDetail,
    register
}

