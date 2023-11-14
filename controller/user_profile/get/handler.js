const executeQuery = require("../../../utils/pool_connections");

const handlerGetUsesProfile = (req, res) => {

  const {user_id} = req.user

  const query = `SELECT
       firstname,
       lastname,
       email,
       login_id,
       card_id,
       line_id,
       grade,
       phone
    FROM
        user_info
    WHERE
        user_id = '${user_id}'`;
        
  executeQuery(query, (data) => {
    res.send({ result: data.rows});
  });
};

module.exports = handlerGetUsesProfile;