const mongoose = require('mongoose');
const { Schema } = mongoose;

const seriesReviews = new Schema({
    id : {type : String, required : true},
    user : [{userid: String, review: String, rating: Number}],
});

module.exports = mongoose.model('seriesreviews', seriesReviews);