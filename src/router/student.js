import express from 'express'
import { studentController } from '../controllers/index.js'
const router = express.Router()

router.get('/', studentController.getStudent)

router.get('/:id', studentController.getStudentDetail)

router.post('/insert', studentController.insert)

router.patch('/update', studentController.updateStudent)

export default router