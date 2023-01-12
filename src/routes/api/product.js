const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product");
const productVariantValidation = require("../../validations/productVariant");
const productController = require("../../controllers/product");
const productVariantController = require("../../controllers/productVariant");
const passport = require("passport");
const Auth = require("../../middlewares/auth");

const router = express.Router();

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  validate(productValidation.add),
  productController.add
);

router.get("", productController.list);

router.get("/:id", productController.view);

router.get("", productController.queryProducts);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validate(productValidation.update),
  productController.update
);

router.post("/uploadImages/:id", productController.uploadProductImages);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  productController.delete
);

router.post(
  "/:id/variants",
  validate(productVariantValidation.add),
  Auth(),
  productVariantController.add
);

module.exports = router;
