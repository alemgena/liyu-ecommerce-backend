const express=require('express')
const product=require('../../controllers/product')
const passport=require('passport')
const router=express.Router()
router.patch(
    "/product/:id",
    passport.authenticate('jwt',{session:false}),
    product.updateProduct
  );

module.exports=router