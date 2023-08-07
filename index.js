const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
require("./connection");
const userRouter = require("./routers/userRouter");

const port = process.env.PORT;

app.use(express.json()); //type conversion

app.use("/api", userRouter);

app.use("/", (req, res) => {
  console.log(`You are request at home page!`);
  return res
    .status(200)
    .send({ msg: "your request is successfully hittet at home!" });
});

//for server start

app.listen(port, () => {
  console.log(`Server started ${port}`);
});


// http://localhost:5000/api/register