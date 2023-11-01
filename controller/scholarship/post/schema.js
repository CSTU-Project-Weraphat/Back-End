const Joi = require("joi").extend(require('@joi/date'));
const checkgrade = require("../../../utils/check_grade")

const schema = (req, res, next) => {
    const validateBody = Joi.object().keys({
        scholarship_name: Joi.string().min(3).max(30).required(),
        scholarship_year:Joi.string().min(4).max(4).required(),
        scholarship_grade:Joi.string().pattern(checkgrade).max(4).required(),
        description:Joi.string(),
        class_type_id:Joi.number().integer().strict().required(),
        start_date:Joi.date().format('YYYY-MM-DD').utc().required(),
        end_date:Joi.date().format('YYYY-MM-DD').utc().required(),
        scholarship_type_id:Joi.number().integer().strict().required(),
        color_tag:Joi.string().required(),
        scholarship_condition: Joi.string().min(3).max(30).required(),
        scholarship_qualification: Joi.string().min(3).max(30).required(),
    })

    const { error } = validateBody.validate(req.body);

    if (!error) {
        next();
     } else {
     return res.status(400).send({ result: error.details });
     }
}

module.exports = schema