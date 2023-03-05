import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import connectDB from './config/DatabaseConfig.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running with on port ${PORT}`)
)
