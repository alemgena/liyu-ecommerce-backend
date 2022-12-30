const httpStatus = require("http-status");
const { Product, ProductImage } = require("../models");
const ApiError = require("../utils/ApiError");

const updateProduct = async (id, productData) => {
  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new ApiError(httpStatus.BAD_REQUEST, "product not found");
  }
  const updatedProduct = await Product.findOneAndUpdate(
    id,
    { $set: productData },
    { returnOriginal: false }
  );
  return updatedProduct;
};
const add = async (productBody) => {
  return Product.create(productBody);
};
const uploadProductImages = async (files, id) => {
  if (files.length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Pleas Select One File");
  }
  for (let type of files) {
    let imageUri = `images/${type.filename}`;
    await ProductImage.create({ imageUri: imageUri ,productId:id});
  }
  return "Upload Images Successfully ";
};
module.exports = {
  updateProduct,
  add,
  uploadProductImages,
};
