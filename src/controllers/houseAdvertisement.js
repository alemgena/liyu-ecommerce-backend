const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const SuccessResponse = require("../utils/successResponse");
const { houseAdvertisement } = require("../services");
exports.add = catchAsync(async (req, res) => {
    const data = await houseAdvertisement.add({ ...req.body });
    res
    .status(httpStatus.OK)
    .send(
      new SuccessResponse(httpStatus.CREATED, "", data)
    );
  });