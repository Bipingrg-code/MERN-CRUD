import express from "express";

import Routes from './routes/route.js'
import Connection from './database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}))

//urlencode
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
//routes
app.use('/',Routes)

//port
const PORT = 8000

//env config
const username = process.env.DB_USERNAME

const password = process.env.DB_PASSWORD

Connection(username,password);

app.listen(PORT, () => {
console.log(`Server is runiing successfully on port ${PORT}`)
})