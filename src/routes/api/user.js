const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user");
const userController = require("../../controllers/user");

const router = express.Router();

router.patch(
  "/changePassword",
  validate(userValidation.changePassword),
  userController.changeUserPassword
);
router.patch("/:id/activateAccount", userController.activateUserAccount);

// router.patch("/:id", userController.update);

module.exports = router;
