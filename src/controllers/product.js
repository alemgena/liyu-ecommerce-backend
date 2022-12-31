const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { product } = require("../services");

exports.add = catchAsync(async (req, res) => {
  const data = await product.add({ ...req.body });
  res.status(httpStatus.CREATED).send({data});
});


