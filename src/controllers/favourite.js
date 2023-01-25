const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { favourite } = require("../services");
const SuccessResponse = require("../utils/successResponse");

exports.add = catchAsync(async (req, res) => {
  const data = await favourite.add({ ...req.body });
  res
    .status(httpStatus.CREATED)
    .send(new SuccessResponse(httpStatus.CREATED, "", data));
});
