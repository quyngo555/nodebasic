import express from "express";
import { getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser } from '../controller/homeController.js';


let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomepage);
    router.get('/detail/user/:id', getDetailPage)
    router.post('/create-new-user', createNewUser)
    router.post('/delete-user', deleteUser)
    router.get('/edit-user/:id', getEditPage)
    router.post('/update-user', postUpdateUser)
    return app.use('/', router)
}

export default initWebRoute