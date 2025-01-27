const httpStatus = require("http-status");
const { OptionValue, ProductOption } = require("../models");
const ApiError = require("../utils/ApiError");

exports.add = async (poID, body) => {
  return new Promise((resolve, reject) => {
    ProductOption.findOne({ _id: poID }, async (err, data) => {
      if (err) {
        return reject(
          new ApiError(httpStatus.BAD_REQUEST, "Error finding the option", err)
        );
      }
      if (!data) {
        return reject(
          new ApiError(httpStatus.BAD_REQUEST, "Product option not found")
        );
      }
      OptionValue.findOne(
        { value: body.value, option: data.id },
        (err, duplicated) => {
          if (err) {
            return reject(
              new ApiError(
                httpStatus.BAD_REQUEST,
                "Error adding a value for the option",
                err
              )
            );
          }
          if (duplicated) {
            return reject(
              new ApiError(
                httpStatus.BAD_REQUEST,
                "Option value already exists"
              )
            );
          }

          OptionValue.create(
            { value: body.value, option: data.id },
            (err, data) => {
              if (err) {
                return reject(
                  new ApiError(
                    httpStatus.BAD_REQUEST,
                    "Error adding product option value",
                    err
                  )
                );
              }

              resolve(data);
            }
          );
        }
      );
    });
  });
};

exports.delete = async (oID) => {
  return new Promise((resolve, reject) => {
    OptionValue.findOne({
      _id: oID,
    }).exec(async (err, data) => {
      if (err) {
        reject(
          new ApiError(httpStatus.BAD_REQUEST, "error finding the data", err)
        );
      }
      if (!data) {
        return reject(new ApiError(httpStatus.BAD_REQUEST, "Data not found"));
      }
      await data.delete();
      resolve(data);
    });
  });
};

exports.update = async (id, body) => {
  return new Promise((resolve, reject) => {
    OptionValue.findOne({
      _id: id,
    }).exec(async (err, data) => {
      if (err) {
        reject(
          new ApiError(httpStatus.BAD_REQUEST, "error finding the data", err)
        );
      }
      if (!data) {
        return reject(new ApiError(httpStatus.BAD_REQUEST, "data not found"));
      }
      Object.assign(data, body);
      await data.save();
      resolve(data);
    });
  });
};

exports.get = (id) => {
  return new Promise((resolve, reject) => {
    OptionValue.findOne({
      _id: id,
    }).exec(async (err, data) => {
      if (err) {
        reject(
          new ApiError(httpStatus.BAD_REQUEST, "error finding the data", err)
        );
      }
      if (!data) {
        return reject(new ApiError(httpStatus.BAD_REQUEST, "Data not found"));
      }

      resolve(data);
    });
  });
};
