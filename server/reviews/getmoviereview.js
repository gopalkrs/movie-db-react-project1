const Movies = require('../moviedb/content-schemas/moviesschema')

const getmoviereview= async (req, res, next)=>{
    const movieId = req.params.movieId;
    let reviews;
    try{
        const existingMovie = await Movies.findOne({id: movieId});
        reviews = existingMovie.user;
    }catch(err){
        console.log(err);
    }

    res.status(200).json({
        status: 'Success',
        data: reviews
    });
}
module.exports = getmoviereview;