const Joi = require("joi");

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        title: Joi.string().min(3).max(500).required(),
        description: Joi.string().min(3).max(1000).required(),
    })

    const { error } = validateBody.validate(req.body);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema