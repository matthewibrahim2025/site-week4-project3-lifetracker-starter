const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // take the users email and password and attempt to authenticate them
    const user = await User.login(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    console.log("In register route");
    // take the user email, password
    const { email, firstName, lastName, username, password } = req.body;
    const user = await User.register(
      email,
      firstName,
      lastName,
      username,
      password
    );
    return res.status(201).json({ user });
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});

module.exports = router;
