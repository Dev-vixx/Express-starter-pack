let express = require("express");
let route = express.Router();
let members = require("../../members");
route.get("/", (req,res)=>
{
    res.json(members)
})

module.exports = route;