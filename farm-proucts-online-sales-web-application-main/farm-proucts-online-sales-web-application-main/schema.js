const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    email: String,
    password: Number,
    cpassword: Number,
    product: String,
});
module.exports.Books = mongoose.model("Books",bookSchema);