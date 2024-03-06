import { body, param, validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js'
import {EventEmitter} from 'node:events'
const myEvent = new EventEmitter()

myEvent.on('event.register.user', (params) => {
    console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body

    await userRepository.login({ email, password })

    res.status(200).json({
        message: 'Login successfully'
    })
}

const getUser = async (req, res) => {
    res.status(200).json({
        message: 'Get user successfully'
    })
}

const getUserDetail = async (req, res) => {
    res.status(200).json({
        message: 'GET users by id successfully'
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

    myEvent.emit('event.register.user', {x: 1, y: 2})

    res.status(200).json({
        message: 'POST register user successfully'
    })
}

export default {
    login,
    getUser,
    getUserDetail,
    register
}

