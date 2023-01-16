const express = require("express");
const validate = require("../../middlewares/validate");
const favouriteValidation = require("../../validations/favourite");
const favouriteController = require("../../controllers/favourite");
const router = express.Router();
const passport = require('passport');

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validate(favouriteValidation.add),
  favouriteController.add
);


module.exports = router;