const executeQuery = require("../../utils/pool_connections");

const handlerclassYearType = (req, res) => {
  const query = `SELECT
        class_type_id,
        class_type_name,
        is_active,
        create_date
    FROM
        class_year_type
    WHERE
        is_active = 'Y'`;
        
  executeQuery(query, (data) => {
    res.send({ result: data.rows });
  });
};

module.exports = handlerclassYearType;
