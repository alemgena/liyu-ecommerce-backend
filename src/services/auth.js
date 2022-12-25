const httpStatus = require("http-status");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

exports.register = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  return User.create(userBody);
};
