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
              user: process.env.EMAIL_NODEMAILER, // your email
              pass: process.env.PASSWORD_NODEMAILER // your email password
            }
          });
    
          const Mail = data.rows.map((item)=>(item.email))
          const Subject = "ประกาศ "+data.rows[0].scholarship_name

          let mailOptions = {
            from: process.env.EMAIL_NODEMAILER,  // sender
            to: Mail,   // list of receivers
            subject: Subject,   // Mail subject
            html: `<b>${Subject}</b>
            <br/>
            <b>สามารถดูรายละเอียดได้ที่ <a href="https://csscholarship.vercel.app/">https://csscholarship.vercel.app/</a></b>`  // HTML body
          };
          
            transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
             res.send({result : data.rows})
         
      })
    });
}

module.exports = handlerSendEmailAlert