const express = require('express');
const path = require('path');
const app = express();
// const sass = require('node-sass');

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render("index");
    // res.send("<h1>Welcome to EJS world </h1>");
});

app.listen(3002, () => {
    console.log("server started on port 3002");
});