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

// FIXME: disscussion for route implementation

// const subcategory = require("./subcategory");
// const Routers = {
//   auth,
//   product,
//   subcategory,
// };
module.exports = Routers;
