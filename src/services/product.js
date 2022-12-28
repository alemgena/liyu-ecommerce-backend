const { Product } = require("../models");

exports.queryProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};
