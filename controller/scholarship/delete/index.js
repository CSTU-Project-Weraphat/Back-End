const preHandlerdeleteScholarship = require("./prehandler")
const schema = require("./schema")
const handlerDeleteScholarship = require("./handler")

const handleDeleteScholarship = [schema,preHandlerdeleteScholarship,handlerDeleteScholarship]

module.exports = handleDeleteScholarship