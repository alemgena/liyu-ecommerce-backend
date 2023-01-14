<<<<<<< HEAD
const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
const socials = require("./socials");
const upload = require("./upload");
const newsLetter = require("./newsLetter");
const spam = require("./spam");
const favourite = require("./favourite");
const faq = require("./faq");
const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
  socials,
  upload,
  newsLetter,
  spam,
  favourite,
  faq
};

module.exports = Routers;
=======
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
>>>>>>> EB-22-Notification
