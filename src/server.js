// const express = require("express")
// const morgan = require("morgan")

import express from "express"
import morgan from "morgan"
import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"


const app = express()

const adminjs = new AdminJS({
})

const adminRouter = AdminJSExpress.buildRouter(adminjs)

app.use(adminjs.options.rootPath, adminRouter)

app.use(express.json())
app.use(morgan('dev'))


app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(3000, ()=>{
    console.log(`app is running on port 3000. admin panel is on ${adminjs.options.rootPath}`)
})