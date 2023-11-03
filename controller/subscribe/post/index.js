const handlerSubscribe = require("./handler");
const preHandlerSubscribe = require("./prehandler");
const schema = require("./schema");

const handleSubscribe = [schema,preHandlerSubscribe,handlerSubscribe]

module.exports = handleSubscribe