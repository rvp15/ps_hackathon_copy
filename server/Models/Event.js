const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema ({
    eventName: {
        type: String,
        require: true
    },
    eventdate: {
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
    limit: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    eventid:{
        type: String
    }


})

const Event = mongoose.model('Events', eventSchema)
module.exports = Event