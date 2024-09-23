import { Router } from 'express'
import { getUsers, getUser, createUser, deleteUser, updateUser, userLogin, userRegister } from '../controllers/user.controllers.js'

const router = Router()

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

router.get('/login', userLogin)

router.get('/register', userRegister)

export default router