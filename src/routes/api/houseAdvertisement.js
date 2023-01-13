const express = require("express");
const validate = require("../../middlewares/validate");
const advertisement = require("../../controllers/houseAdvertisement");
const router = express.Router();
router.post("",  advertisement.add);
module.exports = router;