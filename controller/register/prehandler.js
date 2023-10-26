const executeQuery = require("../../utils/pool_connections");

const preHandlerRegister = (req, res, next) => {
  const { student_id } = req.body;

  const query = `SELECT * FROM user_info WHERE student_id = '${student_id}'`;
  executeQuery(query, (data) => {
    console.log(data.rows)
    if (data.rows) {
      return res.status(400).send(err);
    }

    if ( data.rows[0] === undefined) {
      next();
    } else {
      return res
        .status(400)
        .send({ result: `รหัสนักศึกษา ${student_id} is already used` });
    }
  });
};

module.exports = preHandlerRegister;
