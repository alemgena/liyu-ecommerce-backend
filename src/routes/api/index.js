const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const socials = require("./socials");
const upload = require("./upload");
const newsLetter = require("./newsLetter");
const spam = require("./spam");
const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
  socials,
  upload,
  newsLetter,
  spam
};

module.exports = Routers;
