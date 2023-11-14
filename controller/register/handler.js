const executeQuery = require("../../utils/pool_connections");
const bcrypt = require("bcryptjs");
const ROLE_ID = require("../../enum/type_roleid")
const { v4: uuidv4 } = require("uuid");

const handlerRegister = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    login_id,
    password,
    card_id,
    line_id,
    grade,
    phone
    
  } = req.body;
  const user_id = uuidv4();
  const role_id = ROLE_ID.STUDENT; 
  
  bcrypt.hash(password,10,(err,value) => {
    const query = `INSERT INTO
 user_info (
    user_id,
     role_id,
     firstname,
     lastname,
     email,
     login_id,
     password,
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
     '${login_id}',
     '${value}',
     '${card_id}',
     '${line_id}',
     '${grade}',
     '${phone}'
    
 )`;
    if (err) {
        return res.status(400).send(err);
    }

    executeQuery(query, (data)=>{
  res.send({success:data.rowCount === 1})
});
})
  
 
 
};

module.exports = handlerRegister;
