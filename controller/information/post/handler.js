const executeQuery = require("../../../utils/pool_connections");
const { v4: uuidv4 } = require("uuid");

const handlerAddinformation = (req,res) => {
    const {title,description} = req.body

    const info_id = uuidv4();
    const user_id = req.user.user_id;

    const query = `INSERT INTO
    information (
         info_id,
        user_id,
        title,
        description
    )
  VALUES
    (
        '${info_id}',
        '${user_id}',
        '${title}',
        '${description}'
    )`;

    executeQuery(query, (data)=>{
        res.send({success:data.rowCount === 1})
      });
}

module.exports = handlerAddinformation