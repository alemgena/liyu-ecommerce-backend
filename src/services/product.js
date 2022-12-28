const { Product } = require("../models");

exports.add = async (productBody) => {
    return Product.create(productBody);
};




