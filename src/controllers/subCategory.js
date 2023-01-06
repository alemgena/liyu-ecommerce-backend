const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { subCategory } = require("../services");
const SuccessResponse = require("../utils/successResponse");

exports.add = catchAsync(async (req, res) => {
  const result = await subCategory.add({ ...req.body });
  res.status(httpStatus.CREATED).send({ result });
});

exports.delete = catchAsync(async (req, res) => {
  const result = await subCategory.delete(req.params.id);

  res
    .status(httpStatus.OK)
    .send(
      new SuccessResponse(
        httpStatus.OK,
        "Successfully deleted the sub category",
        result
      )
    );
});

exports.update = catchAsync(async (req, res) => {
  const result = await subCategory.update(req.params.id, req.body);
  res.send(result);
});
