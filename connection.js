const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Error while connected: ${err}`);
  });

module.exports = mongoose;
