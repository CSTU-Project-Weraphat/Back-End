const ROLE_ID = require("../../../enum/type_roleid");
const executeQuery = require("../../../utils/pool_connections")
require("dotenv/config");
const nodemailer = require('nodemailer');

const handlerSendEmailAlert = (req,res) => {
   const {scholarship_id} = req.params
   const query=`
    SELECT
        user_info.firstname,
        user_info.lastname,
        user_info.email,
        scholarship_info.scholarship_id,
        scholarship_info.scholarship_name
    FROM
        scholarship_info
        INNER JOIN user_info ON scholarship_info.scholarship_grade <= user_info.grade
    WHERE
        scholarship_info.scholarship_id = '${scholarship_id}'
    AND  
        user_info.grade >= scholarship_info.scholarship_grade
    AND 
        user_info.is_active = 'Y'
    AND 
        user_info.role_id = '${ROLE_ID.STUDENT}'`

    executeQuery(query, (data) => {
      
      const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
              user: "zParkAS@hotmail.co.th", // your email
              pass: "Weraphat#*-/0" // your email password
            }
          });
    
          const Mail = data.rows.map((item)=>(item.email))
          
          let mailOptions = {
            from: "zParkAS@hotmail.co.th",  // sender
            to: Mail,   // list of receivers
            subject: 'ทดสอบแจ้งเตือนผ่านอีเมลรอบที่ 6 ',   // Mail subject
            html: '<b>ทดสอบ API ผ่าน Backend ที่ deploy</b>'  // HTML body
          };
          new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              reject(err)
            else
              resolve(res.send({result : data.rows})) 
          });
      })
          
        
    });
}

module.exports = handlerSendEmailAlert