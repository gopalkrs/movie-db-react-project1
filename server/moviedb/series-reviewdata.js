const seriesDB = require("./contents-data/series_data");
const seriesReviews = require('./content-schemas/seriesschema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = process.env.DB_URI.replace('DB_USER',process.env.DB_USER).replace('DB_PASSWORD',process.env.DB_PASSWORD).replace('DB_NAME',process.env.DB_NAME);

mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to mongo")
})
.catch((err)=>{
    console.error("Error connecting mongo", err.message)
});

Object.keys(seriesDB).forEach((movie)=>{
    const review = new seriesReviews({id: movie});
    review.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
})