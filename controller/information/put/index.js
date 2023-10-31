const handlerEditInformation = require("./handler");
const preHandlerEditInformation = require("./prehandler");
const schema = require("./scheme")

const handleEditInformation = [
    schema,
    preHandlerEditInformation,
    handlerEditInformation
];

module.exports = handleEditInformation;