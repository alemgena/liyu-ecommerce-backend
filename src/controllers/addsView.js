const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { addsView } = require("../services");
exports.add = catchAsync(async (req, res) => {
    const result = await addsView.add({ ...req.body });
    res.status(httpStatus.CREATED).send({ result });
  });
  exports.countAddsView = catchAsync(async (req, res) => {
    const result = await addsView.countViews(req.params.addsId);
    res.status(httpStatus.OK).send({ result });
  });