const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { subCategory } = require("../services");

exports.add = catchAsync(async (req, res) => {
  const result = await subCategory.add({ ...req.body });
  res.status(httpStatus.CREATED).send({ result });
});

exports.delete = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subCategory.delete(id);
  res.status(httpStatus.OK).send({ result });
});

exports.update = catchAsync(async (req, res) => {
  const result = await subCategory.update(req.params.id, req.body);
  res.send(result);
});
