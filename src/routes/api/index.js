const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const spam = require("./spam");
const notification = require("./notification");

const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
  spam,
  notification
};

module.exports = Routers;
