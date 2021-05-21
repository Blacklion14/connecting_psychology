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

app.get("/notes" , function(req , res){
    console.log("notes");
});

app.get("/join" , function(req , res){
    console.log("join");
});

app.get("/psychology" , function(req , res){
    res.render("psychology");
});

app.get("/men_health" , function(req , res){
    console.log("mental health");
});

app.get("/psy_ther" , function(req , res){
    console.log("psychoTherapy");
});

app.get("/PTK" , function(req , res){
    res.write("Pta_Nhi_Kya");
});

app.post("/counselling" ,function(req , res){
    console.log("counselling");
});


app.listen(3000, function () {
    console.log("server running at 3000");
});
