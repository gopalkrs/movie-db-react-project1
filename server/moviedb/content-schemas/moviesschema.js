const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieReviews = new Schema({
    id : {type : String, required : true},
    user : [{userid: String, review: String, rating: Number}],
});

module.exports = mongoose.model('moviereviews', movieReviews);