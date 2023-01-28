const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const subCategoryController = require("../../controllers/subCategory");
const subCategoryValidation = require("../../validations/subCategory");

const router = express.Router();

router.post(
  "",
  auth(),
  validate(subCategoryValidation.add),
  subCategoryController.add
);

router.delete("/:id", auth(), subCategoryController.delete);

router.patch(
  "/:id",
  auth(),
  validate(subCategoryValidation.update),
  subCategoryController.update
);

module.exports = router;
