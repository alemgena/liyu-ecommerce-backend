const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const socials = require("./socials");
const subcategory = require("./subcategory");

const Routers = {
  auth,
  product,
  category,
  user,
  socials,
  subcategory,
};

// FIXME: disscussion for route implementation

// const Routers = {
//   auth,
//   product,
//   subcategory,
// };
module.exports = Routers;
