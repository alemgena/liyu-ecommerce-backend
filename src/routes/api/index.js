const auth = require("./auth");
const product = require("./product");
const category = require("./category");
const user = require("./user");
const subCategory = require("./subCategory");
<<<<<<< HEAD
const socials = require("./socials");
const upload = require("./upload");
const newsLetter = require("./newsLetter");
const spam = require("./spam");
=======
const favourite = require("./favourite");
const faq = require("./faq");

>>>>>>> EB-17-FAQ
const Routers = {
  auth,
  product,
  category,
  user,
  subCategory,
<<<<<<< HEAD
  socials,
  upload,
  newsLetter,
  spam
=======
  favourite,
  faq
>>>>>>> EB-17-FAQ
};

module.exports = Routers;
