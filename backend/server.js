import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

import bRts from './routes/blogRoutes.js';
import uRts from './routes/userRoutes.js'

const app = express()
app.use(express.json());
app.use(cors());


const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
if (process.env.NODE_ENV==='production'){
    const clientPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(clientPath));
    app.get('/',(req,res)=>{
        res.sendFile(path.join(clientPath, 'index.html'))
    })
}

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT || 4000, () => console.log("Connected to database and listening to request at port ", process.env.PORT))
}).catch(err=>console.log(err))