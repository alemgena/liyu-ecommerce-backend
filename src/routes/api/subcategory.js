const express = require("express");
const validate = require("../../middlewares/validate");
const subCategoryController = require("../../controllers/subcategory");
const subcategoryValidation = require("../../validations/subcategory");

const router = express.Router();

router.post(
  "",
  validate(subcategoryValidation.create),
  subCategoryController.create
);

router.delete(
  "/:id",
  validate(subcategoryValidation.remove),
  subCategoryController.remove
);

module.exports = router;