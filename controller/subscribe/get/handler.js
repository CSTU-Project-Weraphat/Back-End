const executeQuery = require("../../../utils/pool_connections")

const handlerFollowScholarship = (req,res) => {
    const query = `
    SELECT 
        subscribe_id,
        user_id,
        scholarship_id,
        is_active,
        create_date
    FROM
        subscribe_scholarship
    WHERE
        user_id = '${req.user.user_id}'
    AND
        is_active = 'Y'
    `

    executeQuery(query,(data)=>{
        res.send({ result: data.rows})
    })
}

module.exports = handlerFollowScholarship