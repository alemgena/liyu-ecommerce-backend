const catchAsync = require("../utils/catchAsync");
const {product}=require('../services')
exports.updateProduct = catchAsync(async (req, res) => {
const udatedProduct=await product.updateProduct(req.params.id,req.body)
    res.status(200).send( {updatedProduct:udatedProduct} );

  });