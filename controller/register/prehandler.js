const executeQuery = require("../../utils/pool_connections");

const preHandlerRegister = (req, res, next) => {
  const { student_id } = req.body;

  const query = `SELECT * FROM user_info WHERE student_id = '${student_id}'`;
  executeQuery(query, (data) => {
    if ( !data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `StudentID ${student_id} is already used` });
    }
  });
};

module.exports = preHandlerRegister;
