const Joi = require("joi");

const add = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.base": "name must be a string",
      "string.empty": "name cannot be empty field",
      "any.required": "name is a required field",
    }),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      "any.required": "subcategory id is a required field",
    }),
  }),
};

const update = {
  body: Joi.object().keys({
    name: Joi.string().messages({
      "string.base": "name must be a string",
      "string.empty": "name cannot be empty field",
    }),
    subcategory: Joi.string().messages({
      "string.base": "subcategory must be a string",
      "string.empty": "subcategory cannot be empty field",
    }),
  }),
};
module.exports = {
  add,
  update,
};
