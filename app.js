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


app.listen(3000, () => {
    console.log("You have connected to the PORT:3000.");
})


app.get("/testnewitem", async (req, res) => {
    const test_item = new Item({category: "1", title: "1", condition: "1", description: "1", location: "1", name: "1", email: "1", phone: "1"});
    await test_item.save();
    res.send(test_item);
})
