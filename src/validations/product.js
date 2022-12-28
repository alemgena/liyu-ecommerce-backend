const Joi = require("joi");

const update = {
  body: Joi.object().keys({
    name: Joi.string().min(4).required().messages({
      "string.base": "product name must be a string",
      "string.min": "product name must be longer than 4 characters",
    }),
    description: Joi.string().required().min(4).messages({
      "string.base": "description must be a string",

      "string.min": "description must be longer than 4 characters",
    }),
    subCategory: Joi.string().required().min(1).messages({
      "string.base": "subCategory must be a string",
    }),

    countInStock: Joi.number().required().messages({
      "string.base": "countInStock must be a string",
    }),
    price: Joi.number().required().messages({
      "string.base": "price must be a string",
    }),
    featured: Joi.boolean(),
    premium: Joi.boolean(),
    state: Joi.string().required().min(4).messages({
      "string.base": "state must be a string",
      "string.min": "state must be longer than 4 characters",
    }),
  }),
};

module.exports = {
  update,
};
