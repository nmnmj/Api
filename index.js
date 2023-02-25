import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL
import web from './routes/web.js'
import connectDB from './db/mongoconnectin.js'
const app = express()

//response from req in json
app.use(express.json())
connectDB(DATABASE_URL)

app.use("/", web)

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})