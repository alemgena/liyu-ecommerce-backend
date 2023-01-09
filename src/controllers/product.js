const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const { product } = require("../services");
const uploadImage = require("../helper/uploadImages");

exports.add = catchAsync(async (req, res) => {
  const data = await product.add({ ...req.body });
  res.status(httpStatus.CREATED).send({ data });
});

exports.list = catchAsync(async (req, res) => {
  const data = await product.list();
  res.status(200).send({ data });
});

exports.view = catchAsync(async (req, res) => {
  const data = await product.view(req.params.id);
  res.status(200).send({ data });
});

exports.queryProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    "name",
    "description",
    "state",
    "search",
    "premuim",
    "featured",
    "price",
    "allergies",
  ]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const data = await product.queryProducts(filter, options);
  res.status(httpStatus.OK).send({ data });
});

exports.update = catchAsync(async (req, res) => {
  const data = await product.update(req.params.id, req.body);
  res.status(200).send({ data });
});

exports.uploadProductImages = catchAsync(async (req, res) => {
  await uploadImage(req, res);
  const data = await product.uploadProductImages(req.files, req.params.id);
  res.status(httpStatus.CREATED).send({ data });
});

exports.delete = catchAsync(async (req, res) => {
  const data = await product.delete(req.params.id);
  res.status(200).send({ data });
});
