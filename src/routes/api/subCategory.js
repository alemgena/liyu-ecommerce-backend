const express = require("express");
const validate = require("../../middlewares/validate");
const subCategoryController = require("../../controllers/subCategory");
const subCategoryValidation = require("../../validations/subCategory");

const router = express.Router();

router.post("", validate(subCategoryValidation.add), subCategoryController.add);

router.delete("/:id", subCategoryController.delete);

router.patch(
  "/:id",
  validate(subCategoryValidation.update),
  subCategoryController.update
);

module.exports = router;
