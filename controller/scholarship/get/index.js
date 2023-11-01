const handlergetScholarship = require("./handler")
const preHandlergetScholarship = require("./prehandler")
const schema = require("./schema")

const handlegetScholarship = [schema,preHandlergetScholarship,handlergetScholarship]

module.exports = handlegetScholarship