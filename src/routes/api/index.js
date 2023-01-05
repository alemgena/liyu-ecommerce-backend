const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const favourite = require("./favourite");
const faq = require("./faq");

const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
  favourite,
  faq
};

module.exports = Routers;
