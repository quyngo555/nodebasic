// const express = require('express')
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import configViewEngine from './configs/viewEngine.js'
import express from 'express'
import path from 'path'
import 'dotenv/config'
import connection from './configs/connectDB.js';
import initAPIRoute from './route/api.js';
const app = express()
const port = process.env.PORT || 8080
console.log("check port: ", port);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import initWebRoute from './route/web.js'

// get value of form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup view engine
configViewEngine(app)

//init web route
initWebRoute(app)

//init api route
initAPIRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})