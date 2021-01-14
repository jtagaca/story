//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("name of the folder")); // this is where you can reference static content to serve up some images. this code is needed to use static content.
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res) {
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.em;
    console.log(lastname, firstname, email);

})
app.listen(3000, function() {
    console.log("Server is runnings");
});