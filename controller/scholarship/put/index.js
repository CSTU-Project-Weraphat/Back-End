const handlerEditScholarship = require("./handler")
const preHandlerEditScholarship = require("./prehandler")
const schema = require("./schema")

const handleEditScholarship = [schema,preHandlerEditScholarship,handlerEditScholarship]

module.exports = handleEditScholarship