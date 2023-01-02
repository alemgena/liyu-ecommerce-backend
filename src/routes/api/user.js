const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user");
const userController = require("../../controllers/user");

const router = express.Router();

router.patch("/changePassword",validate(userValidation.changePassword), userController.changeUserPassword);
router.patch("/activateAccount/:id", userController.activateUserAccount);
module.exports = router;
