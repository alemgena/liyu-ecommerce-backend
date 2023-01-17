const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product");
const productController = require("../../controllers/product");
const passport = require("passport");

const router = express.Router();

router.post("",  passport.authenticate("jwt", { session: false }), validate(productValidation.add), productController.add);

router.get("", productController.list);
router.get("/images", productController.listImages);
router.get("/:id", productController.view);
router.get("/image/:id", productController.viewProductImage);
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

module.exports = router;
