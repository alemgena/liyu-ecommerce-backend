const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { category } = require("../services");

exports.add = catchAsync(async (req, res) => {
  const data = await category.add({ ...req.body });
  res.status(httpStatus.CREATED).send({data});
});


