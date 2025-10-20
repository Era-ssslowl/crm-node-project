// const express = require("express")
// const morgan = require("morgan")

import express from "express"
import morgan from "morgan"
import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import * as AdminJSMongoose from '@adminjs/mongoose'
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import User from "./models/user.js"

dotenv.config()


AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const app = express()
const PORT = process.env.PORT
const MONGO = process.env.MONGO_URI

const db = await connectDB(MONGO)


// console.log(db)

const adminjs = new AdminJS({
    databases: [db],
    resources: [User]
})

const adminRouter = AdminJSExpress.buildRouter(adminjs)

app.use(adminjs.options.rootPath, adminRouter)

app.use(express.json())
app.use(morgan('dev'))



app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}. admin panel is on ${adminjs.options.rootPath}`)
})