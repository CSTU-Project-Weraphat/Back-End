const Joi = require("joi");
const checkphone = require("../../utils/check_phonenumber/index");
const checkgrade = require("../../utils/check_grade/index");
const schema = (req, res, next) => {
  const validateBody = Joi.object().keys({
    firstname: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    student_id: Joi.string().min(10).max(10).required(),
    user_password: Joi.string().required(),
    card_id: Joi.string().min(13).max(13).required(),
    line_id: Joi.string().required(),
    grade: Joi.string().pattern(checkgrade).max(4).required(),
    phone: Joi.string().pattern(checkphone).required()
  });
  const { error } = validateBody.validate(req.body);

  if (!error) {
    next();
  } else {
    return res.status(400).send({ result: error.details });
  }
};

module.exports = schema;