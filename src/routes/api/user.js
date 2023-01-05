const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user");
const userController = require("../../controllers/user");
const passport = require("passport");
const router = express.Router();

router.patch(
  "/changePassword",
  validate(userValidation.changePassword),
  passport.authenticate("jwt", { session: false }),
  userController.changeUserPassword
);
router.patch("/:id/activateAccount", userController.activateUserAccount);

 router.patch("/:id",  passport.authenticate("jwt", { session: false }), userController.update);

module.exports = router;
