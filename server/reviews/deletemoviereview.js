const Movies = require('../moviedb/content-schemas/moviesschema')

const deletemoviereview = async (req, res, next)=>{
    const uid = req.params.uid;
    const movieId = req.params.movieId;
    const postid = req.params.postid;

    let deletedPost;
    if(!uid || !postid){
        return res.status(401).json({
            status: "Failed",
            message: "User/Review is null or not found."
        });
    }
    try{
        deletedPost = await Movies.findOneAndUpdate({id: movieId}, 
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

module.exports = deletemoviereview;