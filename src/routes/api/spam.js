const express = require("express");
const validate = require("../../middlewares/validate");
const spamValidation = require("../../validations/spam");
const spamController = require("../../controllers/spam");
const router = express.Router();
const passport = require('passport');

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validate(spamValidation.add),
  spamController.add
);


module.exports = router;