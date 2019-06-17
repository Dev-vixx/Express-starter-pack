let express = require("express");
let path = require("path");
let app = express();
let logger =require("./middleware/logger");

// importing the members array

// setting up express middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// self defined middleware
app.use(logger)


// public serve
app.use(express.static(path.join(__dirname, "public")))

// middleware for members api
app.use("/api", require("./route/api/Members"))













// listening on the port
let port = process.env.PORT || 3000;
app.listen(port, ()=>
{
    console.log(`server started on port ${port}`)
})