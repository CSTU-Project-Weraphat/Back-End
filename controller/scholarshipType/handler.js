const executeQuery = require("../../utils/pool_connections");

const handlerScholarshipType = (req, res) => {
    const query = `SELECT 
        scholarship_type_id, 
        scholarship_type_name, 
        create_date, 
    FROM 
        scholarship_type`;
    executeQuery(query, (data)=>{
        res.send({result:data.rows})
    });

}

module.exports = handlerScholarshipType