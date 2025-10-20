// const express = require("express")
// const morgan = require("morgan")

import express from "express"
import morgan from "morgan"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import ConnectAdminPanel from "./config/adminPanel.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

//DB and PANEL
await connectDB()
const adminRouter = ConnectAdminPanel()

//ROUTES
app.use("/admin", adminRouter)


//MODULES
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}. admin panel is on /admin`)
})