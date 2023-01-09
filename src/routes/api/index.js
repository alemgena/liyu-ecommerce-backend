const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");

const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
};

module.exports = Routers;
