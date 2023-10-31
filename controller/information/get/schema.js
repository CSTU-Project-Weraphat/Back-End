const Joi = require("joi");

const schema = (req, res, next) => {
    const validateQuery = Joi.object().keys({
        limit: Joi.number().integer().required(),
        offset: Joi.number().integer().required(),
    })

    const { error } = validateQuery.validate(req.query);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema