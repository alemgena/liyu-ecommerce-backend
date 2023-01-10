const Joi = require("joi");

const add = {
    body: Joi.object().keys({
        title: Joi.string().min(4).required().messages({
            "string.base": "title must be a string",
            "string.empty": "title cannot be empty field",
            "string.min": "title must be longer than 4 characters",
            "any.required": "title is a required field",
        }),
        body: Joi.string().required().min(4).messages({
            "string.base": "body must be a string",
            "string.empty": "body cannot be an empty field",
            "string.min": "body must be longer than 4 characters",
            "any.required": "body is a required field",
        }),
        click_action: Joi.string().messages({
            "string.base": "click_action must be a string"
        }),


    }),
};

module.exports = {
    add,
};
