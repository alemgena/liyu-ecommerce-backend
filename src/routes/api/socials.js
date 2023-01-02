const express = require("express");
const passport = require("passport");
const config = require("../../config/config");
const socialsController = require("../../controllers/social");

const router = express.Router();

router.get("/google", socialsController.google);
module.exports = router;
