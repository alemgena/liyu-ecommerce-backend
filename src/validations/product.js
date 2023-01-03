const Joi = require("joi");

const add = {
  body: Joi.object().keys({
    name: Joi.string().min(4).required().messages({
      "string.base": "product name must be a string",
      "string.empty": "product name cannot be empty field",
      "string.min": "product name must be longer than 4 characters",
      "any.required": "product name is a required field",
    }),
    description: Joi.string().required().min(4).messages({
      "string.base": "description must be a string",
      "string.empty": "description cannot be an empty field",
      "string.min": "description must be longer than 4 characters",
      "any.required": "description is a required field",
    }),
    subCategory: Joi.string().required().min(1).messages({
      "string.base": "subCategory must be a string",
      "string.empty": "subCategory cannot be an empty field",
      "any.required": "subCategory is a required field",
    }),
    seller: Joi.string().required().min(1).messages({
      "string.base": "subCategory must be a string",
      "string.empty": "subCategory cannot be an empty field",
      "any.required": "subCategory is a required field",
    }),

    price: Joi.number().required().messages({
      "string.base": "price must be a number",
      "string.empty": "price cannot be an empty field",
      "any.required": "price is a required field",
    }),
    featured: Joi.boolean(),
    premium: Joi.boolean(),
    state: Joi.string().required().min(4).messages({
      "string.base": "state must be a string",
      "string.empty": "state cannot be an empty field",
      "string.min": "state must be longer than 4 characters",
      "any.required": "state is a required field",
    }),
  }),
};

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
  add,
};
