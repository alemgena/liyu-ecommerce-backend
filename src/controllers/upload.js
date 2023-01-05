const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const uploadImage = require("../helper/uploadImage");
const ApiError = require("../utils/ApiError");

exports.upload = catchAsync(async (req, res) => {
  await uploadImage(req, res);
  if (!req.files) {
    throw new ApiError(httpStatus.BAD_REQUEST, "upload atleast one image");
  }
  res.status(httpStatus.OK).send({ images: req.files });
});
