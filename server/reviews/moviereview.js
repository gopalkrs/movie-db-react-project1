const movieSchema = require('../moviedb/content-schemas/moviesschema');

const moviereview = async (req, res, next)=>{
    const {review, rating, userId, movieId} = req.body;
    let reviewId;
    if(!review || !rating || !userId){
        return res.status(404).json({
            status: 'fail',
            message: 'Please fill all the fields.'
        });
    }
    try{
        const temp = await movieSchema.findOneAndUpdate({id: movieId}, 
            {$push: {"user": {userid: userId, review: review, rating: rating}}}
        );
    
        reviewId = temp.result.value._id;
    }catch(err){
        console.log(err);
    }

    res.status(201).json({
        status: "Success",
        message: "Review Posted.",
        data: {
            reviewId
        }
    });

}

module.exports = moviereview;