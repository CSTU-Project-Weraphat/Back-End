const Joi = require("joi");

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        username : Joi.string().alphanum().min(10).max(13).required(),
        password : Joi.string().alphanum().min(4).max(20).required()
    })

    const { error } = validateBody.validate(req.body);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema