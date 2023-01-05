const express = require("express");
const uploadController = require("../../controllers/upload");
const router = express.Router();

router.post("/types/:type", uploadController.upload);

module.exports = router;
