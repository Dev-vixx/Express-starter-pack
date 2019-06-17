let express = require("express");
let route = express.Router();
let members = require("../../members");
route.get("/", (req,res)=>
{
    res.status(400).json({msg: "please read the Docs of the api"})
})

// members section
route.get("/members", (req,res)=>
{
    res.json(members)
})

module.exports = route;