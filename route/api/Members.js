let express = require("express");
let route = express.Router();
let members = require("../../members");

// members section
route.get("/members", (req,res)=> res.json(members))
// getting the member with thier id
route.get("/members/:m_id", (req,res)=>
{
    // performing some check to see if the m_id exist
    const isThere = members.some(member => member.id == req.params.m_id);//returns true or false
    isThere ? res.json(members.filter(member => member.id == req.params.m_id)) : res.status(400).json({msg: `the member with the id of ${req.params.m_id} was not found`})
    
})

route.get("*", (req,res)=>
{
    res.status(400).json({msg: "please read the Docs of the api", Docs: `${req.protocol}://${req.get("host")}/docs`})
})
module.exports = route;