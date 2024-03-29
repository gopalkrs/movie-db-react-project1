import "../styles/Review.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewOutput from "./ReviewOutput";

function SeriesReviews ({seriesId}){

    const [message, setMessage] = useState("");

    const [getReviews, setGetReviews] = useState([]);
    const getAllDatas = async ()=>{
        try{
            const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/seriesreviews/${seriesId}`);
            setGetReviews(data.data.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getAllDatas();
    }, [getReviews]);
    
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    const uId = localStorage.getItem('userId');
    const [post, setPost] = useState({
        review: "",
        rating: "",
        seriesId: seriesId,
        userId: uId
    });

    const handlePosts = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setPost({...post, [name]: value});
    }

    const submitHandler=async (e)=>{
        e.preventDefault();

        if(!isLogged){
            alert("Kindly login before posting!")
        }
        if(isLogged){

            if(!post.review || !post.rating){
                alert("Write something before submitting!")
            }
            else{
                try{
                    const token = localStorage.getItem('userToken');
    
                    const promiseData = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/seriesreviews`, post, {
                        'headers': {
                            'authorization': `Bearer ${token}`
                        }
                    });
                    setMessage(promiseData.data.message);
    
                    if(promiseData.data){
                        setPost({
                            review: "",
                            rating: "",
                            movieId: seriesId,
                            userId: uId
                        });
                    }
                    setTimeout(()=>setMessage(""), 2000);
                }catch(err){
                    console.log(err);
                }
            }
        }
    }

    return (
        <div>
            <div className = "rating-reviews-main-div">
            <form action="/" onSubmit={submitHandler}>
            <div className="rating-div">
                <label htmlFor="rating">Rating: </label>
                <select name="rating" id="rating" className="rating-dropdown" onChange={handlePosts} value={post.rating}>
                    <option value=""></option>
                    <option value="1">&#11088;</option>
                    <option value="2">&#11088;&#11088;</option>
                    <option value="3">&#11088;&#11088;&#11088;</option>
                    <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                    <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                </select>
            </div>
            <div className="review-div">
                <label htmlFor="review">Review: </label>
                <textarea rows="4" cols="30" id="review" name="review" value={post.review} onChange={handlePosts}></textarea>
            </div>
            <div className="submit-btns-div">
                <button>Submit</button>
                <p>{message}</p>
            </div>
            </form>
            </div>
            <div className="reviews-component">
            { getReviews.map((rev)=>{
                const {userid, review, rating, _id} = rev;
                return (
                    <ReviewOutput id={userid} review={review} rating={rating} contentId={seriesId} content="seriesreviews" key={userid} reviewId={_id} />
                );
            }) }
            </div>
        </div>
    );
}

export default SeriesReviews;