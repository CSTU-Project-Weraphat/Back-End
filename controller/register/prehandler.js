const executeQuery = require("../../utils/pool_connections");

const preHandlerRegister = (req, res, next) => {
  const { student_id,email } = req.body;

  const query = `
        SELECT 
            student_id , 
            email 
        FROM 
            user_info 
        WHERE 
            student_id = '${student_id}' 
        AND 
            email = '${email}'`;

  executeQuery(query, (data) => {
    if ( !data.rows[0] ) {
      next();
    } else {
      return res
        .status(400)
        .send({ message: `StudentID ${student_id} OR email ${email} is already used` });
    }
  });
};

module.exports = preHandlerRegister;
