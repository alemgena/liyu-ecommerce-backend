<<<<<<< HEAD
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
=======
const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user");
const userController = require("../../controllers/user");
const passport = require("passport");
const router = express.Router();

router.patch(
  "/changePassword",
  validate(userValidation.changePassword),
  userController.changeUserPassword
);
router.patch("/:id/activateAccount", userController.activateUserAccount);

router.patch("/:id",  passport.authenticate("jwt", { session: false }), userController.update);
router.get("/:id", passport.authenticate("jwt", { session: false }), userController.view);
module.exports = router;
>>>>>>> EB-17-FAQ
