const Joi = require("joi");
const check_uuid = require("../../../utils/check_uuid")

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        info_id: Joi.string().pattern(check_uuid).required(),
        title: Joi.string().min(3).max(30),
        description: Joi.string().min(3).max(200),
    })

    const { error } = validateBody.validate(req.body);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema