import express from "express";

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs')
    })

    router.get('/about', (req, res) => {
        res.send("i'm quy")
    })
    return app.use('/', router)
}

// module.export = initWebRoute;
export default initWebRoute