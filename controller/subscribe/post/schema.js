const Joi = require("joi")
const check_uuid = require("../../../utils/check_uuid")

const schema = (req, res, next) => {

    const validateParams = Joi.string().pattern(check_uuid).required()

    const { error : errorParams} = validateParams.validate(req.params.scholarship_id) 
    
    if (errorParams ) {
        return res.status(400).send({ result: errorParams.details });
     } else {
        next();
     }
}

module.exports = schema