const Joi = require("joi").extend(require('@joi/date'));
const checkgrade = require("../../../utils/check_grade")
const check_uuid = require("../../../utils/check_uuid")

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        scholarship_name: Joi.string().min(3).max(100),
        scholarship_year:Joi.string().min(4).max(4),
        scholarship_grade:Joi.string().pattern(checkgrade).max(4),
        class_type_id:Joi.number().integer().strict(),
        start_date:Joi.date().utc(),
        end_date:Joi.date().utc(),
        scholarship_type_id:Joi.number().integer().strict(),
        color_tag:Joi.string(),
        scholarship_condition: Joi.string().min(3).max(50),
        scholarship_qualification: Joi.string().min(3).max(500),
    })

    const validateParams = Joi.string().pattern(check_uuid).required()
    const { error : errorParams} = validateParams.validate(req.params.scholarship_id) 
    const { error : errorBody } = validateBody.validate(req.body);
    
    if (!errorParams && !errorBody) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema