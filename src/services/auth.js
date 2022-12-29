const httpStatus = require("http-status");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

exports.register = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  return User.create(userBody);
};


exports.update = async (id, userData) => {
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "user not found");
  }
  const updatedUser = await User.findOneAndUpdate(
    id,
    { $set: userData },
    { returnOriginal: false }
  );
  return updatedUser;
};
