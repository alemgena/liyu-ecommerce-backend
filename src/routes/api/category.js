const express = require("express");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validations/category");
const categoryController = require("../../controllers/category");
const router = express.Router();

router.post(
  "",
 validate(categoryValidation.add),
  categoryController.add
);

router.get(
  "",
  categoryController.list
);

router.patch(
    "/:id",
    categoryController.update
  );
router.delete(
    "/:id",
    categoryController.delete
  );  
module.exports = router;