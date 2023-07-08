const express = require("express");
const User = require("../models/user");
const router = express.Router();
const {createUserJwt} = require("../utils/tokens");
const security = require("../middleware/security");

router.post("/login", async (req, res, next) => {
  try {
    // take the users email and password and attempt to authenticate them
    const user = await User.login(req.body);

    const token = createUserJwt(user);

    return res.status(200).json({ user,token });
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

    const token = createUserJwt(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});


router.post("/exercise", async (req, res, next) => {
  try {
    const { name, category, duration, intensity, userId } = req.body;
    // const userId = req.user.id; // Assuming you have implemented authentication and populated the user object
    const exercise = await User.addExer(name, category, duration, intensity, userId);
    return res.status(201).json({ exercise });
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});



router.get("/exercise/:id", async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming you have implemented authentication and populated the user object
    // const exerciseId = req.params.id; // Retrieve the exercise ID from the route parameters

    const exercise = await User.displayExerInfo(userId); // Pass the exercise ID and user ID to the method

    return res.status(200).json({ exercise }); // Use 200 OK status code for a successful response
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});


router.post("/nutrition", async (req, res, next) => {
  try {
    const { name, category, quantity, calories, userId, imageurl } = req.body;
    // const userId = req.user.id; // Assuming you have implemented authentication and populated the user object
    const nutrition = await User.addNut(name, category, quantity, calories, userId, imageurl );
    return res.status(201).json({ nutrition });
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});

router.get("/nutrition/:id", async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming you have implemented authentication and populated the user object
    // const exerciseId = req.params.id; // Retrieve the exercise ID from the route parameters

    const nutrition = await User.displayNutInfo(userId); // Pass the exercise ID and user ID to the method

    return res.status(200).json({ nutrition }); // Use 200 OK status code for a successful response
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});


router.post("/sleep", async (req, res, next) => {
  try {
    const { startTime, endTime, userId } = req.body;
    // const userId = req.user.id; // Assuming you have implemented authentication and populated the user object
    const sleep = await User.addSleep(startTime, endTime, userId);
    return res.status(201).json({ sleep });
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});



router.get("/sleep/:id", async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming you have implemented authentication and populated the user object
    // const exerciseId = req.params.id; // Retrieve the exercise ID from the route parameters

    const sleep = await User.displaySleepInfo(userId); // Pass the exercise ID and user ID to the method

    return res.status(200).json({ sleep }); // Use 200 OK status code for a successful response
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const {email} = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const publicUser = User.makePublicUser(user);
    return res.status(200).json({user: publicUser});
  } catch (err) {
    console.error("Error is: ", err);
    next(err);
  }


});


module.exports = router;
