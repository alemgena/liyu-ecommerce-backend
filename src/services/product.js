const httpStatus = require("http-status");
const { Product, ProductImage } = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (productBody) => {
  return Product.create(productBody);
};

exports.list = async () => {
  return Product.find({});
};

exports.view = async (id) => {
  const product = await Product.findOne({ _id: id });
  var subCategory = product.subCategory;
  const relatedProducts = await Product.find()
    .where("subCategory")
    .equals(subCategory);
  var response = { product, relatedProducts };
  if (!product) {
    throw new ApiError(httpStatus.BAD_REQUEST, "product not found");
  }
  return response;
};

exports.queryProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

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

const uploadProductImages = async (files, id) => {
  if (files.length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Pleas Select One File");
  }
  for (let type of files) {
    let imageUri = `images/${type.filename}`;
    await ProductImage.create({ imageUri: imageUri, productId: id });
  }
  return "Upload Images Successfully ";
};
module.exports = {
  updateProduct,
  add,
  uploadProductImages,
};
