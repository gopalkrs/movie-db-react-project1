import "../styles/Review.css";
import React, { useState, useEffect, useRef } from "react";


function Reviews(){

    let [reviews, setReviews] = useState({});
    const reviewRef= useRef();
    const ratingRef = useRef();


    const submitHandler=async (e)=>{
        e.preventDefault();
        reviews = {review: reviewRef.current.value, rating: ratingRef.current.value};
        console.log(reviews);
    }

    return (
        <div className = "rating-reviews-main-div">
            <form action="/" onSubmit={submitHandler}>
            <div className="rating-div">
                <label htmlFor="rating">Rating: </label>
                <select name="rating" id="rating" className="rating-dropdown">
                    <option value="1">&#11088;</option>
                    <option value="2">&#11088;&#11088;</option>
                    <option value="3">&#11088;&#11088;&#11088;</option>
                    <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                    <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                </select>
            </div>
            <div className="review-div">
                <label htmlFor="review">Review: </label>
                <textarea rows="4" cols="30" id="review" name="review"></textarea>
            </div>
            <div className="submit-btns-div">
                <button>Submit</button>
            </div>
            </form>
        </div>
    );
}

export default Reviews;