const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const {product}=require('../services')
const uploadImage=require('../helper/uploadImages')
exports.updateProduct = catchAsync(async (req, res) => {
const udatedProduct=await product.updateProduct(req.params.id,req.body)
    res.status(200).send( {updatedProduct:udatedProduct} );

  });

exports.add = catchAsync(async (req, res) => {
  const data = await product.add({ ...req.body });
  res.status(httpStatus.CREATED).send({data});
});
exports.uploadProductImages = catchAsync(async (req, res) => {
  await uploadImage(req, res);
  const productImages=await product.uploadProductImages(req.files,req.params.id)
  res.status(httpStatus.CREATED).send({ productImages });
 });