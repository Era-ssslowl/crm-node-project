// const mongoose = require('mongoose')

import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    login: {type: String, required: true, unique: true },
    password: {type: String, required: true, unique: true },
    name: String,
    surname: String,
    speciality: String
})

const User = mongoose.model('User', userSchema)

export default User