const executeQuery = require("../../../utils/pool_connections")

const preHandlerEditScholarship = (req, res, next) => {
  const { scholarship_id } = req.body;

  const query = `SELECT scholarship_id FROM scholarship_info WHERE scholarship_id = '${scholarship_id}'`;
  executeQuery(query, (data) => {
    if ( data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `InfoID ${info_id} Not Found` });
    }
  });
};

module.exports = preHandlerEditScholarship;