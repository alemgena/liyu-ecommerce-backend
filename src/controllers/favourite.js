const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { favourite } = require("../services");


exports.add = catchAsync(async (req, res) => {
  const data = await favourite.add({ ...req.body });
  res.status(httpStatus.CREATED).send({ data });
});





