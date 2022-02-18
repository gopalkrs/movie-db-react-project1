const express = require('express');
const router = express.Router();

const moviesDB = require("./contents-data/movie_datas");
router.get("/",(req,res)=>{
    const movielist = [];
    Object.keys(moviesDB).forEach((movieId)=>{
        const data = moviesDB[movieId];
        movielist.push({...data,id: movieId});
    });
    res.send(movielist);
});

router.get("/:movieId",(req,res)=>{
   const data = moviesDB[req.params.movieId];
   if(data) {
       res.send(data);
   }
   else {
       res.status(404).send();
   }
});

module.exports = router;