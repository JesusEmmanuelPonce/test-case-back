const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    salary: {
        type: Number,
        trim: true
    },
    enterprise: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Eemployees', employeeSchema)