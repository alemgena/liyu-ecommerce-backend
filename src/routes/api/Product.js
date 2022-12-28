const express=require('express')
const product=require('../../controllers/product')
const passport=require('passport')
const router=express.Router()
router.patch(
    "/product/:id",
    passport.authenticate('jwt',{session:false}),
    product.updateProduct
  );
  router.delete(
    "/product/:id",
    passport.authenticate('jwt',{session:false}),
    product.deleteProduct
  );
  router.get("/product/:id",
  passport.authenticate('jwt',{session:false}),
  product.getProductById);

module.exports=router