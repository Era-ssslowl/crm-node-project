import mongoose from "mongoose"



let mongo = null


const connectDB = async (URI) => {
    if (mongo){
        console.log("Db is already connected")
        return mongo
    }
    try{
        mongo = await mongoose.connect(URI)
        console.log("Mongo db is connected")
        return mongo
    }catch(err){
        console.log("error while connecting to DB => " + err)
    }
}

export default connectDB