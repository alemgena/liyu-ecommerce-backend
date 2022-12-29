const { Subcategory } = require("../models");

exports.create = async (body) => {
  return Subcategory.create(body);
};

exports.remove = async (id) => {
  const subcategory = await Subcategory.findById(id);
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "sub category not found");
  }
  subcategory.deletedAt = Date.now();
  await subcategory.save();
  return subcategory;
};

exports.updateSubcategory = async (id, updateBody) => {
  const subcategory = await Subcategory.findById(id);
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "sub category not found");
  }

  Object.assign(subcategory, updateBody);
  await subcategory.save();
  return subcategory;
};
