import AdminJS from "adminjs";
import * as AdminJSMongoose from '@adminjs/mongoose'
import AdminJSExpress from "@adminjs/express"
import User from "../models/user.js";
import connectDB from "./db.js";





AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
})

const db = await connectDB()

const adminjs = new AdminJS({
    databases: [db],
    resources: [User]
})

let adminRouter = null
const ConnectAdminPanel = () => {
    if (adminRouter){
        console.log("adminRouter is already connected")
        return adminRouter
    }
    try{
        adminRouter = AdminJSExpress.buildRouter(adminjs)
        console.log("adminRouter is connected")
        return adminRouter
    }catch(err){
        console.log("error on adminPanel => " + err)
    }
}



export default ConnectAdminPanel
