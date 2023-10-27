const executeQuery = require("../../utils/pool_connections");
require("dotenv/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secret = process.env.SECRET_KEY;

const handlerLogin = (req, res) => {
  const { student_id, user_password } = req.body;

  const query = `SELECT * FROM user_info WHERE student_id = '${student_id}'`;

  executeQuery(query, (data) => {
    if (data.rows.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    
    bcrypt.compare(
      user_password,
      data.rows[0].user_password,
      (err, isLogin) => {
        if (isLogin) {
          const token = jwt.sign(
            {
              role_id: data.rows[0].role_id,
              user_id: data.rows[0].user_id,
              firstname: data.rows[0].firstname,
              lastname: data.rows[0].lastname,
            },
            secret,
            {
              expiresIn: "3h",
            }
          );
          return res.send({ result: { accessToken: token } });
        } else {
          return res.status(400).json({ message: err });
        }
      }
    );
  });
};

module.exports = handlerLogin;
