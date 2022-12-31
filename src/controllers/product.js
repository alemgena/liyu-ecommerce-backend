const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { product } = require("../services");

exports.add = catchAsync(async (req, res) => {
  const data = await product.add({ ...req.body });
  res.status(httpStatus.CREATED).send({data});
});

exports.list = catchAsync(async (req, res) => {
const data = await product.list();
res.status(200).send(data);
});

exports.view = catchAsync(async (req, res) => {
  const data = await product.view(req.params.id);
  res.status(200).send( {product:data} );
});


