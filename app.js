const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const https = require("https");
const request = require("request");
const mongoose = require("mongoose");
const { render } = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


// GET REQ
app.get("/" , function(req , res){
    res.render("index");
});

app.get("/join" , function(req , res){
    console.log("join");
});

app.get("/psychology" , function(req , res){
    res.render("psychology");
});

app.get("/memory" , function(req , res){
    res.render("memory");
});

app.get("/therapy" , function(req , res){
    res.render("therapy");
});

app.get("/stress" , function(req , res){
    res.render("stress");
});

app.post("/counselling" ,function(req , res){
    res.redirect("/")
});

const Port = process.env.PORT || 3000;

app.listen(Port, function () {
    console.log("server running");
});
