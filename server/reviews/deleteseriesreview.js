const Series = require('../moviedb/content-schemas/seriesschema')

const deleteseriesreview = async (req, res, next)=>{

    const uid = req.params.uid;
    const seriesId = req.params.seriesId;
    const postid = req.params.postid;

    let deletedPost;
    if(!uid || !postid){
        return res.status(401).json({
            status: "Failed",
            message: "User/Review is null or not found."
        });
    }
    try{
        deletedPost = await Series.findOneAndUpdate({id: seriesId}, 
            {$pull: {"user": {userid: uid, _id: postid}}}
        );
        console.log(deletedPost);
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({
        status: "Success",
        message: "Review Deleted.",
        data: {
            deletedPost
        }
    });
}

module.exports = deleteseriesreview;