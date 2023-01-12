const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const socials = require("./socials");
const upload = require("./upload");
const newsLetter = require("./newsLetter");
const adds=require('./adds')
const Routers = {
  auth,
  product,
  adds,
  category,
  user,
  subCategory,
  socials,
  upload,
  newsLetter,
};

module.exports = Routers;
