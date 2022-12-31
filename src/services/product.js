const { Product } = require("../models");
exports.add = async (productBody) => {
    return Product.create(productBody);
};

exports.list = async () => {
    return Product.find({});
};

exports.view = async (id) => {
    const product = await Product.findOne({ _id: id });
    var subCategory = product.subCategory;
    const relatedProducts = await Product.find().where("subCategory").equals(subCategory);
    var response = {product, relatedProducts};
    if (!product) {
      throw new ApiError(httpStatus.BAD_REQUEST, "product not found");
    }
    return response;
  }



