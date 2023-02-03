const Joi = require("joi");

const add = {
  body: Joi.object().keys({
    value: Joi.string().required().messages({
      "string.base": "value must be a string",
      "string.empty": "value cannot be empty field",
      "any.required": "value is a required field",
    }),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      "any.required": "option id is a required field",
    }),
  }),
};

const update = {
  body: Joi.object().keys({
    value: Joi.string().messages({
      "string.base": "value must be a string",
      "string.empty": "value cannot be empty field",
    }),
    option: Joi.string().messages({
      "string.base": "option must be a string",
      "string.empty": "option cannot be empty field",
    }),
  }),
};
module.exports = {
  add,
  update,
};
