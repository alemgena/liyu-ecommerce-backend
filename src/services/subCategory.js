const httpStatus = require("http-status");
const { Subcategory } = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (body) => {
  return new Promise((resolve, reject) => {
    if (Subcategory.isNameTaken(body.name)) {
      return reject(
        new ApiError(
          httpStatus.BAD_REQUEST,
          "sub category with this name already exist"
        )
      );
    }
    Subcategory.create(body, (err, data) => {
      if (err) {
        return reject(
          new ApiError(
            httpStatus.NOT_FOUND,
            "Error adding the sub category",
            err
          )
        );
      }
      resolve(data);
    });
  });
};

exports.delete = async (id) => {
  return new Promise((resolve, reject) => {
    Subcategory.findById(id, async (err, data) => {
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
  return new Promise((resolve, reject) => {
    Subcategory.findById(id, (err, data) => {
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
      if (data.name && Subcategory.isNameTaken(data.name, id)) {
        return reject(
          new ApiError(
            httpStatus.BAD_REQUEST,
            "sub category with this name already exist"
          )
        );
      }
      Object.assign(subcategory, updateBody);
      subcategory.save();
      resolve(subcategory);
    });
  });
};

exports.get = async (id) => {
  return new Promise((resolve, reject) => {
    Subcategory.findById(id, async (err, data) => {
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
