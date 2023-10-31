const executeQuery = require("../../../utils/pool_connections")

const preHandlerEditInformation = (req, res, next) => {
  const { info_id } = req.body;

  const query = `SELECT info_id FROM information WHERE info_id = '${info_id}'`;
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

module.exports = preHandlerEditInformation;