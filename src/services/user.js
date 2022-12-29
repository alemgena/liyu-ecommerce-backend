const httpStatus = require("http-status");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");
exports.changePassword = async (userBody) => {
  const user = await User.findOne({ _id: userBody.id  });
  if (!user || !(await user.isPasswordMatch(userBody.oldPassword))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect User or Password");
  }
  const myquery = { _id: userBody.id };
  const newPassword=await bcrypt.hash(userBody.newPassword, 14)
  const newvalues = { $set: { password:newPassword } };
  await User.updateOne(myquery, newvalues);
  console.log(user)
  return "You have changed your password successfully."
};
exports.activateAccount = async (id) => {
    const user = await User.findOne({ _id: id  });
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, " User Not Found ");
    }
    const myquery = { _id:id };
    const newvalues = { $set: {  status:"ACTIVE"} };
    await User.updateOne(myquery, newvalues);
   
    return "You have Activate  User Account  successfully."
  };
