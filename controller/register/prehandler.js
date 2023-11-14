const executeQuery = require("../../utils/pool_connections");

const preHandlerRegister = (req, res, next) => {
  const { login_id,email } = req.body;

  const query = `
        SELECT 
            login_id , 
            email 
        FROM 
            user_info 
        WHERE 
            login_id = '${login_id}' 
        AND 
            email = '${email}'`;

  executeQuery(query, (data) => {
    if ( !data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `StudentID ${login_id} OR email ${email} is already used` });
    }
  });
};

module.exports = preHandlerRegister;
