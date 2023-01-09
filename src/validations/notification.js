const Joi = require("joi");

const add = {
    body: Joi.object().keys({
        content: Joi.string().min(4).required().messages({
            "string.base": "content must be a string",
            "string.empty": "content cannot be empty field",
            "string.min": "content must be longer than 4 characters",
            "any.required": "content is a required field",
        }),
        recieverId: Joi.string().required().min(4).messages({
            "string.base": "recieverId must be a string",
            "string.empty": "recieverId cannot be an empty field",
            "string.min": "recieverId must be longer than 4 characters",
            "any.required": "recieverId is a required field",
        }),
        status: Joi.string().messages({
            "string.base": "status must be a string"
        }),


    }),
};

module.exports = {
    add,
};
