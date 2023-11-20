const executeQuery = require("../../../utils/pool_connections")

const preHandlerupdateStatus = (req, res, next) => {
  const { user_id } = req.body;

  const query = `SELECT user_id FROM user_info WHERE user_id = '${user_id}'`;
  executeQuery(query, (data) => {
    if ( data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `UserID '${user_id}' Not Found` });
    }
  });
};

module.exports = preHandlerupdateStatus;