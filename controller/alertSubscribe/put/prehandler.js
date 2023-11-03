const executeQuery = require("../../../utils/pool_connections")

const preHandlerUpdateSubscribe = (req, res, next) => {
  const { alert_id } = req.params;

  const query = `SELECT alert_id FROM alert_scholarship WHERE alert_id = '${alert_id}'`;
  executeQuery(query, (data) => {
    if ( data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `alertID ${alert_id} Not Found` });
    }
  });
};

module.exports = preHandlerUpdateSubscribe;