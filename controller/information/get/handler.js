const executeQuery = require("../../../utils/pool_connections");

const handlerInformation = (req, res) => {

  const {limit,offset} = req.query

  const query = `SELECT
        info_id,
        title,
        description,
        is_active,
        create_date
    FROM
        information
    WHERE
        is_active = 'Y' 
    ORDER BY 
        create_date DESC
    LIMIT ${limit} 
    OFFSET ${offset} ;

    SELECT 
         COUNT(info_id)  
    FROM 
         information;`;
        
  executeQuery(query, (data) => {
    res.send({ result: data[0].rows, total: Number(data[1].rows[0].count) });
  });
};

module.exports = handlerInformation;