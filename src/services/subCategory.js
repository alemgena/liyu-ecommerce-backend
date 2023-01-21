const httpStatus = require("http-status");
const { subCategory } = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (body) => {
  if (await subCategory.isNameTaken(body.name)) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "sub category with this name already exist"
    );
  }
  return subCategory.create(body);
};

exports.delete = async (id) => {
  return new Promise((resolve, reject) => {
    subCategory.findById(id, async (err, data) => {
      if (err) {
        return reject(
          new ApiError(
            httpStatus.NOT_FOUND,
            "Unable to find the sub category",
            err
          )
        );
      }
      if (!data) {
        return reject(
          new ApiError(httpStatus.NOT_FOUND, "Sub category not found")
        );
      }
      data.deletedAt = Date.now();
      await data.save();
      resolve(data);
    });
  });
};

exports.update = async (id, updateBody) => {
  const subcategory = await subCategory.findById(id);
  if (!subcategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "sub category not found");
  }

  if (updateBody.name && (await subCategory.isNameTaken(updateBody.name, id))) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "sub category with this name already exist"
    );
  }

  Object.assign(subcategory, updateBody);
  await subcategory.save();
  return subcategory;
};

exports.get = async (id) => {
  return new Promise((resolve, reject) => {
    subCategory.findById(id, async (err, data) => {
      if (err) {
        return reject(
          new ApiError(
            httpStatus.NOT_FOUND,
            "Error finding the sub category",
            err
          )
        );
      }
      if (!data) {
        return reject(
          new ApiError(httpStatus.NOT_FOUND, "Sub category not found")
        );
      }
      resolve(data);
    });
  });
};
