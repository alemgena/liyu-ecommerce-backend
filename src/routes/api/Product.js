const express=require('express')
const product=require('../../controllers/product')
const passport=require('passport')
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product");
const router=express.Router()
router.patch(
    "/product/:id",
    passport.authenticate('jwt',{session:false}),
    validate(productValidation.add),
    product.updateProduct
  );
  router.post(
    "/add",
    product.add
  );
  router.post(
    "/uploadImages/:id",
    product.uploadProductImages
  );
  
module.exports=router