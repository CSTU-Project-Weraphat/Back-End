const Joi = require("joi");
const check_uuid = require("../../../utils/check_uuid")

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        info_id: Joi.string().pattern(check_uuid).required(),
    })

    const { error } = validateBody.validate(req.body);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema