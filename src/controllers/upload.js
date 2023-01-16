const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const uploadImage = require("../helper/uploadImage");
const singleUploadImage = require("../helper/singleImage");
const ApiError = require("../utils/ApiError");

exports.upload = catchAsync(async (req, res) => {
  await uploadImage(req, res);
  if (!req.files) {
    throw new ApiError(httpStatus.BAD_REQUEST, "upload atleast one image");
  }
  var images = [];
  for (let type of req.files) {
    images.push(`images/${req.params.type}/${type.filename}`);
  }
  res.status(httpStatus.OK).send({ images });
});
exports.singleImage = catchAsync(async (req, res) => {
  await singleUploadImage(req, res);
  if (!req.file) {
    throw new ApiError(httpStatus.BAD_REQUEST, "upload  one image");
  }
  res.status(httpStatus.OK).send({data:`images/${req.params.type}/${req.file.filename}` });
});