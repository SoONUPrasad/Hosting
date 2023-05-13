const mongoose = require("mongoose");

//!connecting to database
mongoose.connect("mongodb+srv://rajs641635:Sonu0510@cluster0.ahsal5u.mongodb.net/Hosting?retryWrites=true&w=majority");

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
