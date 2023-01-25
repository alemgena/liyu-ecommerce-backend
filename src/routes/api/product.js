const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product");
const productController = require("../../controllers/product");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post("", auth(), validate(productValidation.add), productController.add);

// router.get("", productController.list);
router.get("/images", productController.listImages);
router.get("/:id", productController.view);
router.get("/image/:id", productController.viewProductImage);
router.get("", productController.queryProducts);

router.patch(
  "/:id",
  auth(),
  validate(productValidation.update),
  productController.update
);

router.post("/uploadImages/:id", productController.uploadProductImages);

router.delete("/:id", auth(), productController.delete);

module.exports = router;
