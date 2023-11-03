const executeQuery = require("../../../utils/pool_connections")

const handlerUpdateSubscribe = (req,res) =>{
    const {alert_id} = req.params

    const query = `
        UPDATE 
            alert_scholarship
        SET
            is_open = 'Y'
        WHERE
            alert_id = '${alert_id}'`;


    executeQuery(query,(data)=>{
        res.send({success:data.rowCount === 1})
    })

}

module.exports = handlerUpdateSubscribe