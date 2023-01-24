const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { adds } = require("../services");
const SuccessResponse = require("../utils/successResponse");
const { feedBack } = require("../routes/api");
const ObjectID = require("mongodb").ObjectId;
exports.add = catchAsync(async (req, res) => {
  const data = await adds.add({ ...req.body });
  res
    .status(httpStatus.OK)
    .send(new SuccessResponse(httpStatus.CREATED, "", data));
});

