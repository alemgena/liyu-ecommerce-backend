const httpStatus = require("http-status");
const { subCategory, Category } = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (body) => {
  return new Promise(async(resolve, reject) => {
    if (await subCategory.isNameTaken(body.name)) {
      return reject(
        new ApiError(
          httpStatus.BAD_REQUEST,
          "sub category with this name already exist"
        )
      );
    }
    subCategory.create(body, (err, data) => {
      if (err) {
        return reject(
          new ApiError(
            httpStatus.NOT_FOUND,
            "Error adding the sub category",
            err
          )
        );
      }
      Category.findByIdAndUpdate(body.category,{ $push: { subCategory:data.id} },
        { new: true,},async(err,data)=>{
          if (err) {
            return reject(
              new ApiError(
                httpStatus.NOT_FOUND,
                "Error updating category",
                err
              )
            );
          }
        })
      resolve(data);
    });
  });
};

exports.delete = async (id) => {
  return new Promise(async(resolve, reject) => {
  await subCategory.findById(id, async (err, data) => {
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
  return new Promise(async(resolve, reject) => {
   await subCategory.findById(id, (err, data) => {
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
      if (data.name && subCategory.isNameTaken(data.name, id)) {
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
  return new Promise(async(resolve, reject) => {
   await subCategory.findById(id, async (err, data) => {
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
