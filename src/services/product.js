const httpStatus = require("http-status");
const {
  Product,
  ProductImage,
  OptionValue,
  ProductOption,
  Subcategory,
} = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (productData) => {
  // Check if the subcategory exists
  // return new Promise(async (resolve, reject) => {
  const subcategory = await Subcategory.findById(productData.subcategory);
  if (!subcategory) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Subcategory not found");
  }

  // Check if the options exist
  const optionIds = productData.options.map((option) => option.id);
  const options = await ProductOption.find({
    _id: { $in: optionIds },
    subcategory: productData.subcategory,
  });
  if (options.length !== optionIds.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "One or more options not found");
  }

  // Check if the option values exist
  // poValuesID = productData.options.map((option) => option.values);
  for (const option of productData.options) {
    const optionValues = await OptionValue.find({
      _id: { $in: option.values },
      option: option.id,
    });

    if (optionValues.length !== option.values.length) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "One or more options values not found"
      );
    }
  }

  // Create the new product document
  const newProduct = new Product({
    ...productData,
    subcategory: subcategory._id,
    options: productData.options,
  });

  // Save the new product to the database
  await newProduct.save();
  return newProduct.populate();
};

exports.list = async () => {
  return Product.find({});
};

exports.view = async (id) => {
  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new ApiError(httpStatus.BAD_REQUEST, "product not found");
  }
  var subCategory = product.subCategory;
  const relatedProducts = await Product.find()
    .where("subCategory")
    .equals(subCategory);

  var response = { product, relatedProducts };
  return response;
};

exports.queryProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

exports.update = async (id, productData) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "product not found");
  }
  let keys = Object.keys(productData);
  keys.map((x) => {
    product[x] = productData[x];
  });
  await product.save();
  return product;
};

exports.uploadProductImages = async (files, id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "product not found");
  }
  let images = [];
  for (let type of files) {
    let imageUri = `images/${type.filename}`;
    images.push(imageUri);
  }
  product.imagesURL = images;
  await product.save();

  return "Upload Images Successfully ";
};
exports.delete = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "product not found");
  }
  const state = {
    state: "DELETED",
  };
  let keys = Object.keys(state);
  keys.map((x) => {
    product[x] = state[x];
  });
  await product.save();
  return product;
};
exports.viewProductImage = async (id) => {
  const productImage = await ProductImage.find({ productId: id }).populate({
    path: "productId",
    match: { state: "ACTIVE" },
  });
  if (!productImage) {
    throw new ApiError(httpStatus.BAD_REQUEST, "product image not found");
  }
  return productImage;
};
exports.viewImages = async () => {
  return ProductImage.find({}).populate({
    path: "productId",
    match: { state: "ACTIVE" },
  });
};
