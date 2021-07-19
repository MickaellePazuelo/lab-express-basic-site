const express = require("express");

const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));


app.get("/", (request, response, next) => {
    response.render("home.hbs");
});


app.get("/about", (req, res, next) => {
    res.render("about.hbs")
});
  

app.get("/works", (req, res, next) => {
    res.render("works.hbs");
  });


app.listen(3999);