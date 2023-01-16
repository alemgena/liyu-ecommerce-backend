const express = require("express");
const validate = require("../../middlewares/validate");
const Auth = require("../../middlewares/auth");
const subCategoryController = require("../../controllers/subCategory");
const subCategoryValidation = require("../../validations/subCategory");

const router = express.Router();

router.post("", validate(subCategoryValidation.add), subCategoryController.add);

router.delete("/:id", Auth(), subCategoryController.delete);

router.patch(
  "/:id",
  validate(subCategoryValidation.update),
  subCategoryController.update
);

module.exports = router;
