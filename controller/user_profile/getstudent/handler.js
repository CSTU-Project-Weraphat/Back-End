const ROLE_ID = require("../../../enum/type_roleid");
const executeQuery = require("../../../utils/pool_connections");

const handlerGetStudent = (req, res) => {
    const role_id = ROLE_ID.STUDENT
   
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
        role_id = '${role_id}'`;
        
  executeQuery(query, (data) => {
    
    res.send({ result: data.rows});
  });
};

module.exports = handlerGetStudent;