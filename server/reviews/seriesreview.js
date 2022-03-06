const seriesSchema = require('../moviedb/content-schemas/seriesschema');

const seriesreview = async (req, res, next)=>{
    const {review, rating, userId, seriesId} = req.body;

    try{
        const temp = await seriesSchema.findOneAndUpdate({id: seriesId}, 
            {$push: {"user": {userid: userId, review: review, rating: rating}}}
        );
    
        console.log(temp);
    }catch(err){
        console.log(err);
    }

    res.status(201).json({
        status: "Success",
        message: "Review Posted."
    });

}

module.exports = seriesreview;