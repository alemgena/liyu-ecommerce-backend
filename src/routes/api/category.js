const express = require("express");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validations/category");
const categoryController = require("../../controllers/category");
const router = express.Router();

router.post(
  "/add",
 validate(categoryValidation.add),
  categoryController.add
);

router.get(
  "/list",
  categoryController.list
);

router.patch(
    "/update/:id",
    categoryController.update
  );
module.exports = router;