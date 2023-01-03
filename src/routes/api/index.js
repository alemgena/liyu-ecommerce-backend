const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const socials = require("./socials");

const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
  socials,
};

module.exports = Routers;
