const express = require('express');
const router = express.Router();

const seriesDB = require("./contents-data/series_data");
router.get("/",(req,res)=>{
    const serieslist = [];
    Object.keys(seriesDB).forEach((seriesId)=>{
        const data = seriesDB[seriesId];
        serieslist.push({...data,id: seriesId});
    });
    res.send(serieslist);
});

router.get("/:seriesId",(req,res)=>{
   const data = seriesDB[req.params.seriesId];
   if(data) {
       res.send(data);
   }
   else {
       res.status(404).send();
   }
});

module.exports = router;