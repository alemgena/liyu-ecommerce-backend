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
const notification = require("./notification");
const advertisement=require("./houseAdvertisement")
const adds=require('./adds')
const feedBack=require('./feedBack')

const addsView=require('./addsView')
const Routers = {
  auth,
  product,
  adds,
  category,
  user,
  feedBack,
  subCategory,
  socials,
  upload,
  newsLetter,
  spam,
  addsView,
  favourite,
  faq,
  notification,
  advertisement
};

module.exports = Routers;
