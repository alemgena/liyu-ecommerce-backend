const { subCategory } = require("../models");

exports.add = async (body) => {
  return subCategory.create(body);
};

exports.delete = async (id) => {
  const subcategory = await subCategory.findById(id);
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "sub category not found");
  }
  subcategory.deletedAt = Date.now();
  await subcategory.save();
  return subcategory;
};

exports.update = async (id, updateBody) => {
  const subcategory = await subCategory.findById(id);
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "sub category not found");
  }
  // if (updateBody.imageURL) {
  //   updateBody.imageURL = [...subcategory.imageURL, ...updateBody.imageURL];
  // }
  Object.assign(subcategory, updateBody);
  await subcategory.save();
  return subcategory;
};
