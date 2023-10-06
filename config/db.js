const mongoose = require("mongoose")
require("dotenv").config()

const connection = async()=>{
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log("connected to DB")
    } catch (error) {
        console.log("can't connect to DB")
    }
}


module.exports = {connection}