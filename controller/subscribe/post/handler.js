const executeQuery = require("../../../utils/pool_connections")
const { v4: uuidv4 } = require("uuid");

const handlerSubscribe = (req,res) => {
    const {scholarship_id } = req.params

    const subscribe_id = uuidv4();
    const user_id = req.user.user_id;

    const query = `
    INSERT INTO 
        subscribe_scholarship
        (
            subscribe_id,
            scholarship_id,
            user_id
        )
    VALUES
        (
            '${subscribe_id}',
            '${scholarship_id}',
            '${user_id}'
        )`

    executeQuery(query , (data) => {
        res.send({success:data.rowCount === 1})
    })
}

module.exports = handlerSubscribe