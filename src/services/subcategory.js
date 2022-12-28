const { Subcategory } = require("../models");

exports.create = async (body) => {
  return Subcategory.create(body);
};
