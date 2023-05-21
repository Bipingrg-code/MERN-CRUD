import express from 'express';
import { addUsers, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';


const router = express.Router()

router.post('/add', addUsers)
router.get('/all', getUsers)
router.get('/:id', getUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router