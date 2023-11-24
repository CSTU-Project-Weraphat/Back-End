const executeQuery = require("../../../utils/pool_connections")

const handlerUnfollowScholarship = (req,res) => {
    const { subscribe_id } = req.params;

    const query=`DELETE 
    FROM 
        subscribe_scholarship 
    WHERE
        subscribe_id = '${subscribe_id}'`

    executeQuery(query, (data) => {
        
        res.send({ result: data.rows});
      });
}

module.exports = handlerUnfollowScholarship