const { Category } = require("../models");

exports.add = async (categoryBody) => {
    return Category.create(categoryBody);
};

exports.list = async () => {
    return Category.find({});
};



