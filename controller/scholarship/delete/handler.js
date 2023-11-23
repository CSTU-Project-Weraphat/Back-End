const executeQuery = require("../../../utils/pool_connections");
const handlergetScholarshipAll = require("../getAll/handler")

const handlerDeleteScholarship = (req,res) =>{
    const { scholarship_id } = req.body;

    const query = `UPDATE scholarship_info 
      SET 
          is_delete = 'N'
      WHERE
          scholarship_id ='${scholarship_id}'`;
  
    executeQuery(query, (data) => {
      handlergetScholarshipAll(req,res)
      //res.send({ success:data.rowCount === 1 });
    });
}

module.exports = handlerDeleteScholarship