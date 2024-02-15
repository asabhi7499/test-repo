const express = require("express")
const router = express.Router()

// Importing the controller through destructring method
const { homePage } = require("../controllers/Home");

// Routes to home page controller where the logic exist to get the json response from the given api
router.get("/home", homePage);


module.exports = router