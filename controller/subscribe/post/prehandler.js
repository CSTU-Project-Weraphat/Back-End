const executeQuery = require("../../../utils/pool_connections")

const preHandlerSubscribe = (req, res, next) => {
  const { scholarship_id } = req.params;

  const query = `SELECT scholarship_id FROM scholarship_info WHERE scholarship_id = '${scholarship_id}'`;
  executeQuery(query, (data) => {
    if ( data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `ScholarshipID ${scholarship_id} Not Found` });
    }
  });
};

module.exports = preHandlerSubscribe;