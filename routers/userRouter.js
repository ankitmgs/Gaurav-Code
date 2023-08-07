const express = require("express");
const router = express.Router();
const USER = require("../models/userModels");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log(name, email, password);

    if (!email || !password) {
      return res.status(400).send({ msg: "Insufficient data!" });
    }

    const userExist = await USER.findOne({ email: email });
    if (userExist) {
      return res.status(409).send({ msg: "USSER already exist" });
    }

    const user = new USER(req.body);
    await user.save();
    return res.status(200).send({ msg: "USER successfully registered!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
