const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const Routers = {
  auth,
  product,
  category,
  user,
};

module.exports = Routers;
