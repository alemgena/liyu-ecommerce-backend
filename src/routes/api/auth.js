const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth");
const authController = require("../../controllers/auth");
const passport=require('passport');
const router = express.Router();

router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

router.patch(
  "/update/:id",
  passport.authenticate('jwt',{session:false}),
  authController.update
);

module.exports = router;
