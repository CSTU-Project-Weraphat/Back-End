const handlerRegister = require("./handler");
const schema = require("./schema");
const preHandlerRegister = require("./prehandler");

const handleRegister = [schema, preHandlerRegister , handlerRegister];


module.exports = handleRegister;