const { Subcategory } = require("../models");

exports.create = async (body) => {
  return Subcategory.create(body);
};

exports.remove = async (id) => {
  const subcategory = await Subcategory.findById({ _id: id });
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sub category not found");
  }
  await subcategory.remove();
  return subcategory;
};
