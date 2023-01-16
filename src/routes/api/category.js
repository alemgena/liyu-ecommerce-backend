const express = require("express");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validations/category");
const categoryController = require("../../controllers/category");
const router = express.Router();
const passport = require("passport");

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validate(categoryValidation.add),
  categoryController.add
);
router.get(
  "",
  categoryController.list
);

router.patch(
  "/:id", passport.authenticate("jwt", { session: false }),
  validate(categoryValidation.update),
  categoryController.update
);

router.delete(
  "/:id", passport.authenticate("jwt", { session: false }),
  categoryController.delete
);

router.get("/:id/subcategories", categoryController.listSubCategories);
module.exports = router;