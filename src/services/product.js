const httpStatus = require("http-status");
const { Product } = require("../models");
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


const deleteProduct = async (id) => {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      throw new ApiError(httpStatus.BAD_REQUEST, "product not found");
    }
    const myquery = { _id: id };
    const newvalues = { $set: { state: "INACTIVE" } };
    await Product.updateOne(myquery, newvalues);
    return "Product State is Change Into  INACTIVE";
  };
module.exports = {
  updateProduct,
  deleteProduct
 

};
