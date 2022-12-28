const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { product } = require("../services");
const pick = require("../utils/pick");

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
  const products = await product.queryProducts(filter, options);
  res.status(httpStatus.OK).send(products);
});
