const express = require("express");

const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));


app.get("/", (request, response, next) => {
    response.render("home.hbs", {
        css: ["home.css"]
    })
});

app.get("/about", (req, res, next) => {
    res.render("about.hbs", {
        css: ["about.css"]
    })
});
  

app.get("/works", (req, res, next) => {
    res.render("works.hbs", {
        css: ["works.css"]
    })
  });


app.listen(3999);