const handlerUpdateSubscribe = require("./handler");
const preHandlerUpdateSubscribe = require("./prehandler");
const schema = require("./schema");

const handleUpdateSubscribe = [schema,preHandlerUpdateSubscribe,handlerUpdateSubscribe]

module.exports = handleUpdateSubscribe