const handlerDeleteInformation = require("./handler");
const preHandlerDeleteInformation = require("./prehandler");
const schema = require("./schema")

const handleDeleteInformation = [
    schema,
    preHandlerDeleteInformation,
    handlerDeleteInformation
];

module.exports = handleDeleteInformation;