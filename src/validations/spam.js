const Joi = require("joi");

const add = {
    body: Joi.object().keys({
        productId: Joi.string().min(4).required().messages({
            "string.base": "product Id must be a string",
            "string.empty": "product Id cannot be empty field",
            "string.min": "product Id must be longer than 4 characters",
            "any.required": "product Id is a required field",
        }),
        reporterId: Joi.string().required().min(4).messages({
            "string.base": "reporter Id must be a string",
            "string.empty": "reporter Id cannot be an empty field",
            "string.min": "reporter Id must be longer than 4 characters",
            "any.required": "reporter Id is a required field",
        })


    }),
};

module.exports = {
    add,
};
