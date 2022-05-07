import express from "express";
import { getHomepage, getDetailPage, createNewUser } from '../controller/homeController.js';


let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomepage);
    router.get('/detail/user/:id', getDetailPage)
    router.post('/create-new-user', createNewUser)
    router.get('/about', (req, res) => {
        res.send("i'm quy")
    })
    return app.use('/', router)
}

export default initWebRoute