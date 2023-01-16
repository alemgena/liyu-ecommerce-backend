const express = require("express");
const validate = require("../../middlewares/validate");
const notificationValidation = require("../../validations/notification");
const notificationController = require("../../controllers/notification");
const router = express.Router();
const passport = require('passport');

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validate(notificationValidation.add),
  notificationController.add
);

router.get(
  "",
  notificationController.list
);

router.patch(
  "/:id", passport.authenticate("jwt", { session: false }),
  notificationController.update
);

router.delete(
  "/:id", passport.authenticate("jwt", { session: false }),
  notificationController.delete
);
module.exports = router;