const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { subcategory } = require("../services");

exports.create = catchAsync(async (req, res) => {
  const result = await subcategory.create({ ...req.body });
  res.status(httpStatus.CREATED).send({ result });
});
