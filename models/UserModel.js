const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Title: String,
    Info: String,
    Link: String
});


const News = mongoose.model('News', userSchema, "News");

module.exports = News;
