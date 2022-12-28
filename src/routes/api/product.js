const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product");
const productController = require("../../controllers/product");

const router = express.Router();

router.post(
  "/add",
  validate(productValidation.add),
  productController.add
);

router.get(
  "/list",
  productController.list
);
module.exports = router;