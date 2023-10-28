const express = require("express");
const cors = require("cors");
const app = express();
const handleclassYearType = require("./controller/classYearType");
const handleScholarshipType = require("./controller/scholarshipType");
const handleRegister = require("./controller/register");
const handleAddscholarship = require("./controller/addScholarship");
const handleLogin = require("./controller/login");
const handleAuthen = require("./controller/authen");
const handleAddinformation = require("./controller/information/post")
const handlerInformation = require("./controller/information/get")

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));


app.get("/api/scholarship/classYearType", handleclassYearType),
app.get("/api/scholarship/scholarshipType", handleScholarshipType),
app.get("/api/scholarship/getInformation", handlerInformation),

app.post("/api/scholarship/login", handleLogin);
app.post("/api/scholarship/register", handleRegister);
app.post("/api/scholarship/addScholarship", handleAuthen,handleAddscholarship)
app.post("/api/scholarship/addInformation", handleAuthen,handleAddinformation)

app.listen(4000,()=>{console.log('Running on Port 4000')});
