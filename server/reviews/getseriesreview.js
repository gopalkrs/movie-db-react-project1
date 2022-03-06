const Series = require('../moviedb/content-schemas/seriesschema')

const getseriesreview= async (req, res, next)=>{
    const seriesId = req.params.seriesId;
    let reviews;
    try{
        const existingMovie = await Series.findOne({id: seriesId});
        reviews = existingMovie.user;
    }catch(err){
        console.log(err);
    }

    res.status(200).json({
        status: 'Success',
        data: reviews
    });
}
module.exports = getseriesreview;