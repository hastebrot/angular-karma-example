var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "src")));

app.listen(9000);
console.log("Listening on port 9000");
