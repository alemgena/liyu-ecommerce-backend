const Joi = require("joi");

const add = {
    body: Joi.object().keys({
        product: Joi.string().min(4).required().messages({
            "string.base": "product must be a string",
            "string.empty": "product cannot be empty field",
            "string.min": "product must be longer than 4 characters",
            "any.required": "product is a required field",
        }),

        user: Joi.string().min(4).required().messages({
            "string.base": "user must be a string",
            "string.empty": "user cannot be empty field",
            "string.min": "user must be longer than 4 characters",
            "any.required": "user is a required field",
        }),

    }),
};

module.exports = {add};
