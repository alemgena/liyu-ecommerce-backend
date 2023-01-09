const { subCategory } = require("../models");

exports.add = async (body) => {
  return suCategory.create(body);
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

  Object.assign(subcategory, updateBody);
  await subcategory.save();
  return subcategory;
};
