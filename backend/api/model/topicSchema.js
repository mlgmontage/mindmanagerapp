const Joi = require("joi");

const schema = Joi.object({
  markdown: Joi.string().required(),
  parent: Joi.string().allow(""),
});

module.exports = schema;
