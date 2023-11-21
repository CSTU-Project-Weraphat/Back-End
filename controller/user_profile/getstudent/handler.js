const ROLE_ID = require("../../../enum/type_roleid");
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
       phone,
       is_active
    FROM
        user_info
    WHERE
        role_id = '${ROLE_ID.STUDENT}'`;
        
  executeQuery(query, (data) => {
    
    res.send({ result: data.rows});
  });
};

module.exports = handlerGetStudent;