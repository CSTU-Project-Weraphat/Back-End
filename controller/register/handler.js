const executeQuery = require("../../utils/pool_connections");
const ROLE_ID = require("../../enum/type_roleid")
const { v4: uuidv4 } = require("uuid");

const handlerRegister = (req, res) => {
  const {
    firstname,
    lastname,
    email,
    student_id,
    user_password,
    card_id,
    line_id,
    grade,
    phone
    
  } = req.body;
  const user_id = uuidv4();
  const role_id = ROLE_ID.STUDENT; 

  const query = `INSERT INTO
 user_info (
    user_id,
     role_id,
     firstname,
     lastname,
     email,
     student_id,
     user_password,
     card_id,
     line_id,
     grade,
     phone
    
 )
VALUES
 (
     '${user_id}',
     '${role_id}',
     '${firstname}',
     '${lastname}',
     '${email}',
     '${student_id}',
     '${user_password}',
     '${card_id}',
     '${line_id}',
     '${grade}',
     '${phone}'
    
 )`;
 
 executeQuery(query, (data)=>{
  res.send({success:data.rowCount === 1})
});
};

module.exports = handlerRegister;
