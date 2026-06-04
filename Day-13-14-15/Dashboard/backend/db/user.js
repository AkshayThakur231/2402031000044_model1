const mongoose = require("mongoose");
const user_Schema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const user_model = mongoose.model("user", user_Schema);
module.exports = user_model;