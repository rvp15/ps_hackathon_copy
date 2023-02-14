const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema ({
    eventName: {
        type: String,
        require: true
    },
    eventTime: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    deadline: {
        type: String,
        require: true
    },
    registrationLimit: {
        type: Number
    },
    eventSchedule: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }


})

const Event = mongoose.model('Events', eventSchema)
module.exports = Event