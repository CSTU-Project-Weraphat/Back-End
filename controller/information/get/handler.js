const executeQuery = require("../../../utils/pool_connections");

const handlerInformation = (req, res) => {
  const query = `SELECT
        info_id,
        title,
        description,
        is_active,
        create_date
    FROM
        information
    WHERE
        is_active = 'Y'`;
        
  executeQuery(query, (data) => {
    res.send({ result: data.rows });
  });
};

module.exports = handlerInformation;