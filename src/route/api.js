import express from "express";
import { getAllUsers, createNewUser, updateUser, deleteUser } from '../controller/APIController.js'

let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', getAllUsers);
    router.post('/create-user', createNewUser)
    router.put('/update-user', updateUser)
    router.delete('/delete-user/:id', deleteUser)
    return app.use('/api/v1/', router)
}

export default initAPIRoute