const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { subcategory } = require("../services");

exports.create = catchAsync(async (req, res) => {
  const result = await subcategory.create({ ...req.body });
  res.status(httpStatus.CREATED).send({ result });
});

exports.remove = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subcategory.remove(id);
  res.status(httpStatus.OK).send({ result });
});

exports.updateSubcategory = catchAsync(async (req, res) => {
  const result = await subcategory.updateSubcategory(req.params.id, req.body);
  res.send(result);
});
