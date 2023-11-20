const executeQuery = require("../../../utils/pool_connections");
const handlerGetStudent = require("../getstudent/handler")

const handlerUpdateStatus = (req,res) =>{
    const { user_id } = req.body;

    const query = `UPDATE user_info 
      SET 
          is_active = CASE WHEN is_active = 'N' THEN 'Y' ELSE 'N' END     
      WHERE
          user_id ='${user_id}'`;
  
    executeQuery(query, (data) => {
        handlerGetStudent(req,res)
      //res.send({ success:data.rowCount === 1 });
    });
}

module.exports = handlerUpdateStatus