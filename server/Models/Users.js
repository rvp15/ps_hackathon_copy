const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  phoneNumber: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  admin: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
