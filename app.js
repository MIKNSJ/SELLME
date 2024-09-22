const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Item = require("./models/item");


mongoose.connect("mongodb://localhost:27017/sellme");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("The database has been connected.");
});


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("home");
})


app.get("/marketplace", async (req, res) => {
    const items = await Item.find({});
    res.render("marketplace", {items});
})


app.get("/marketplace/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("listing", {item});
})


app.listen(3000, () => {
    console.log("You have connected to the PORT:3000.");
})