/************************************************************
                requiring the dependencies
****************************************************************/

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const dotenv = require("dotenv");


dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



/************************************************************
                Routing -index page
****************************************************************/

app.get("/",function(req,res){
    res.render("index")
});

/************************************************************
                port configuration
****************************************************************/

app.listen(process.env.PORT || 3000, function(){
    //console.log("server started!")
});
