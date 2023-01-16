const catchAsync = require("../utils/catchAsync");
const ObjectID = require("mongodb").ObjectId;
const SuccessResponse = require("../utils/successResponse");
const ApiError = require("../utils/ApiError");
const { user } = require("../services");
exports.changeUserPassword = catchAsync(async (req, res) => {
  const id = req.user._id.toHexString();
  const data = await user.changePassword(id, req.body);
  res
  .status(httpStatus.OK)
  .send(
    new SuccessResponse(
      httpStatus.OK,
      data
    )
  );
});
exports.activateUserAccount = catchAsync(async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Id is not valid");
  }
  const data = await user.activateAccount(req.params.id);
  res
    .status(httpStatus.OK)
    .send(
      new SuccessResponse(
        httpStatus.OK,
        "You have Activate  User Account  successfully.",
        data
      )
    );
});
exports.update = catchAsync(async (req, res) => {
  const data = await user.update(req.params.id, req.body);
  res.status(200).send({ data: data });
});
