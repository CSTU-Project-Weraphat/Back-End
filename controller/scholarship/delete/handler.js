const executeQuery = require("../../../utils/pool_connections");

const handlerDeleteScholarship = (req,res) =>{
    const { scholarship_id } = req.body;

    const query = `UPDATE scholarship_info 
      SET 
          is_active = 'N'
      WHERE
          scholarship_id ='${scholarship_id}'`;
  
    executeQuery(query, (data) => {
      res.send({ success:data.rowCount === 1 });
    });
}

module.exports = handlerDeleteScholarship