const executeQuery = require("../../../utils/pool_connections")

const handlerEditInformation = (req, res) => {
  const { title,description,info_id } = req.body;

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
            info_id = '${req.params.info_id}'`;

    executeQuery(query, (data) => {
        res.send({ success:data.rowCount === 1 });
    });
};

module.exports = handlerEditInformation;
