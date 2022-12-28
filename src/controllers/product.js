const catchAsync = require("../utils/catchAsync");
const {product}=require('../services')
exports.updateProduct = catchAsync(async (req, res) => {
const udatedProduct=await product.updateProduct(req.params.id,req.body)
    res.status(200).send( {updatedProduct:udatedProduct} );

  });
  exports.deleteProduct = catchAsync(async (req, res) => {
    const udatedProduct=await product.deleteProduct(req.params.id)
        res.status(200).send( {updatedProduct:udatedProduct} );
      });