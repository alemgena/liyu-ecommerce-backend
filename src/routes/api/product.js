const express = require("express");
const validate = require("../../middlewares/validate");
const productController = require("../../controllers/product");

const router = express.Router();

router.get("", productController.queryProducts);

module.exports = router;
