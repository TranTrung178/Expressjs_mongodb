import express from 'express'
import { body, validationResult } from 'express-validator'
import { userController } from '../controllers/index.js'
const router = express.Router()

router.get('/', userController.getUser )
router.get('/:id', userController.getUserDetail )


router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 2 })
    , userController.login)

router.post('/register', userController.register)

export default router