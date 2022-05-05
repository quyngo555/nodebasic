// const express = require('express')
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import configViewEngine from './configs/viewEngine.js'
import  express  from 'express'
import path from 'path'
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 8080
console.log("check port: ", port);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})