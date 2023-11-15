const executeQuery = require("../../utils/pool_connections");

const handlerScholarshipType = (req, res) => {
    const query = `SELECT 
        scholarship_type_id, 
        scholarship_type_name,
        is_active, 
        create_date 
    FROM 
        scholarship_type
    WHERE
        is_active = 'Y'`;
        
    executeQuery(query, (data)=>{
        res.send({result:data.rows})
    });

}

module.exports = handlerScholarshipType