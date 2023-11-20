const executeQuery = require("../../../utils/pool_connections");

const handlerGetStudent = (req, res) => {
  const query = `SELECT
       user_id,
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
        role_id = '2'`;
        
  executeQuery(query, (data) => {
    
    res.send({ result: data.rows});
  });
};

module.exports = handlerGetStudent;