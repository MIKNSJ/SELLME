const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
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
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


app.get("/", (req, res) => {
    res.render("home");
})


app.get("/marketplace", async (req, res) => {
    const items = await Item.find({});
    res.render("marketplace", {items});
})


app.get("/marketplace/new", (req, res) => {
    res.render("new");
})


app.post("/marketplace/submit", async (req, res) => {
    const item = new Item(req.body.item);
    await item.save();
    res.redirect(`/marketplace/${item._id}`);
})


app.get("/marketplace/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("listing", {item});
})


app.get("/marketplace/:id/edit", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("edit", {item});
})


app.put("/marketplace/:id", async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, {...req.body.item})
    res.redirect(`/marketplace/${item._id}`);
})


app.delete("/marketplace/:id", async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect("/marketplace");
})


app.listen(3000, () => {
    console.log("You have connected to the PORT:3000.");
})