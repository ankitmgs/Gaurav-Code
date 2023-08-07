const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: "username",
  },
  email: {
    type: String,
    require: true,
    default: "sample@gmail.com",
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("USERS", userSchema);

module.exports = User;
