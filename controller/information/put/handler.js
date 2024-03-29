const executeQuery = require("../../../utils/pool_connections")

const handlerEditInformation = (req, res) => {
  const { title,description} = req.body;
    const {info_id} = req.params
    const updateTitle = (title) => {
        if (title) {
            return `title = '${title.trim()}',`;
          }
          return "";
    }

    const updateDescription = (description) => {
        if (description) {
            return `description = '${description.trim()}',`;
          }
          return "";
    }

    const {user_id} = req.user
    
    const query = `UPDATE information 
        SET 
            ${updateTitle(title)}
            ${updateDescription(description)}
            user_id = '${user_id}'
        WHERE 
            info_id = '${info_id}'`;

    executeQuery(query, (data) => {
        res.send({ success:data.rowCount === 1 });
    });
};

module.exports = handlerEditInformation;
