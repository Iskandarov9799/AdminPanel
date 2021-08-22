const express = require('express');
const server = express();
const fs = require('fs').promises;
const path = require('path')


server.listen(8080, () => console.log("Server is ready"));


server.set("view engine", "ejs");

server.use(express.json());
server.use(express.urlencoded({
    extended: true,
}))

server.use(express.static(path.join(__dirname, "public")));

server.get("/",(req, res)=>{
    res.render("index");
});

