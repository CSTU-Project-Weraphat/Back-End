const handlerUpdateStatus = require("./handler")
const preHandlerupdateStatus = require("./prehandler")
const schema = require("./schema")

const handleUpdateStatus = [schema,preHandlerupdateStatus,handlerUpdateStatus]

module.exports = handleUpdateStatus