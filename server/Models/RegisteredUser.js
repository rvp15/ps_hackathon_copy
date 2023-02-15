const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registeredUserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phonenumber: {
    type: Number,
    require: true,
  },
  eventname: {
    type: String,
    require: true,
  },
  eventId: {
    type: String,
    require: true,
  },
});

const RegisteredUser = mongoose.model("RegisteredUser", registeredUserSchema);

module.exports = RegisteredUser;
