let express = require("express");
let route = express.Router();

route.get("/", (req,res)=>
{
    res.json("[{name: 'ok' }]")
})

module.exports = route;