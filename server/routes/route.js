import express from 'express';
import { addUsers, getUsers, getUser, editUser } from '../controller/user-controller.js';


const router = express.Router()

router.post('/add', addUsers)
router.get('/all', getUsers)
router.get('/:id', getUser)
router.post('/:id', editUser)

export default router