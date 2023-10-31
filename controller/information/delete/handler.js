const executeQuery = require("../../../utils/pool_connections")

const handlerDeleteInformation = (req, res) => {
  const { info_id } = req.body;

  const query = `UPDATE information 
    SET 
        is_active = 'N'
    WHERE
        info_id ='${info_id}'`;

  executeQuery(query, (data) => {
    res.send({ success:data.rowCount === 1 });
  });
};

module.exports = handlerDeleteInformation;
