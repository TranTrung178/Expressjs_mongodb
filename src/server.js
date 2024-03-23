import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connect from './database/database.js'

import { userRouter, studentRouter } from './router/index.js'

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/students', studentRouter)

app.get('/', (req, res) => {
    res.send(`response from root`)
})

app.listen(port, async() => {
    await connect()
    console.log(`Listening port ${port}`)
});
