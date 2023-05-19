import express from 'express';
import { addUsers, getUsers } from '../controller/user-controller.js';


const router = express.Router()

router.post('/add', addUsers)
router.get('/all', getUsers)

export default router