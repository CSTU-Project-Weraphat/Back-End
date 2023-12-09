const Joi = require("joi");
const check_uuid = require("../../../utils/check_uuid")

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        title: Joi.string().min(3).max(100),
        description: Joi.string().min(3).max(500),
    })
    const validateParams = Joi.string().pattern(check_uuid).required()
    const { error : errorParams} = validateParams.validate(req.params.scholarship_id) 
    const { error } = validateBody.validate(req.body);

    if (!error && errorParams) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema