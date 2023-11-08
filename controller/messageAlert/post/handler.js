const executeQuery = require("../../../utils/pool_connections")
const { v4: uuidv4 } = require("uuid");

const handlerMessageAlert = (req,res) => {
    const {description,scholarship_id} = req.body

    const message_id = uuidv4();
    const user_id = req.user.user_id

    const query = `INSERT INTO 
    message_alert(
        message_id,
        user_id,
        scholarship_id,
        description
    )
    VALUES
    (
        '${message_id}',
        '${user_id}',
        '${scholarship_id}',
        '${description}'
    )`

    executeQuery(query, async(data)=>{
        const query = `
        SELECT 
            user_id,scholarship_id 
        FROM
            subscribe_scholarship
        WHERE
            scholarship_id = '${scholarship_id}'`
        executeQuery(query,(data)=>{
          console.log(data.rows);
        //const{message_id} = req.params
        // const alert_id = uuidv4();
        // const query = row.map(
        //     data.rows => `(${alert_id},${data.rows.user_id},${message_id},${data.rows.scholarship_id})`
        //   );
        const query = `INSERT INTO 
        alert_scholarship
        (
            alert_id,
            user_id,
            message_id,
            scholarship_id
        )
        VALUES
            (${alert_id},${user_id},${message_id},${scholarship_id})
        `
        executeQuery(query,(data)=>{
            console.log(data);
        })
        })
       
         res.send({success:"555" })
    })
}

module.exports = handlerMessageAlert