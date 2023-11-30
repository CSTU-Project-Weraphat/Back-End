const executeQuery = require("../../../utils/pool_connections")
require("dotenv/config");
const nodemailer = require('nodemailer');

const handlerSendEmailAlertSubscribe = (req,res) => {
    const {scholarship_id} = req.params
    const query = `
    SELECT
    user_info.firstname,
    user_info.lastname,
    user_info.email,
    scholarship_info.scholarship_id,
    scholarship_info.scholarship_name
FROM
    subscribe_scholarship
    INNER JOIN scholarship_info ON subscribe_scholarship.scholarship_id = scholarship_info.scholarship_id
    INNER JOIN user_info ON subscribe_scholarship.user_id = user_info.user_id
WHERE
    subscribe_scholarship.scholarship_id = '${scholarship_id}'`

    executeQuery(query, (data) => {

      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: process.env.EMAIL_NODEMAILER, // your email
          pass: process.env.PASSWORD_NODEMAILER // your email password
        }
      });

      const Mail = data.rows.map((item)=>(item.email))

      let mailOptions = {
        from: process.env.EMAIL_NODEMAILER,  // sender
        to: Mail,   // list of receivers
        subject: 'ทดสอบแจ้งเตือนผ่านอีเมลรอบที่ 1 ',   // Mail subject
        html: '<b>ทุนที่เปิดใหม่ล่าสุด</b>'  // HTML body
      };
      
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
      });
        res.send({result : data.rows})
    });
}

module.exports = handlerSendEmailAlertSubscribe