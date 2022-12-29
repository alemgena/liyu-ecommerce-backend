const auth = require("./auth");
const product=require("./Product")
const user=require('./user')
const Routers = {
  auth,
  product,
  user
};
module.exports = Routers;
