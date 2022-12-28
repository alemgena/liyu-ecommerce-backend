const { Category } = require("../models");

exports.add = async (categoryBody) => {
    return Category.create(categoryBody);
};





