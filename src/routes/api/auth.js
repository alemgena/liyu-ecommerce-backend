const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth");
const authController = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

router.patch(
  "/update/:id",
  authController.update
);

module.exports = router;
