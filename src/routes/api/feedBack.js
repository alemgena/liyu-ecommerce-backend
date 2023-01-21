const express = require("express");
const validate = require("../../middlewares/validate");
const feedBackValidation = require("../../validations/feedBack");
const feedBackController = require("../../controllers/feedBack");
const passport = require("passport");
const router = express.Router();
router.post("", validate(feedBackValidation.add), 
feedBackController.add);

router.get("", feedBackController.list);
module.exports=router