const fs = require("fs");
const express = require("express");
const { parse, basename, join } = require("path");
const router = express.Router();

let routes = [];
let route = {};
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename(__filename) &&
      file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    route.path = join("/", parse(file).name);
    route["routes"] = require(join(__dirname, file));
    routes.push(route);
  });

routes.forEach((route) => {
  router.use(route.path, route.routes);
});

module.exports = router;
