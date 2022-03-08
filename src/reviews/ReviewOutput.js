import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import '../styles/ReviewOutput.css';

function ReviewOutput ({id, review, rating, contentId, reviewId, content}){

    const [name, setName] = useState('');

    const getData = async ()=>{
        try{
            const data = await axios.get(`/api/user/${id}`);
            console.log(id);
            setName(data.data.data);
        }catch(err){
            console.log(err);
        }
    }

    const deleteReviewHandler = async ()=>{
        let uId = localStorage.getItem('userId');
        try{
            const data = await axios.delete(`/api/user/${content}/${contentId}/${uId}/${reviewId}`);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    }, []);

    return (
        <div className="review-output-div">
            <div className="review-output-header">
                <h4><FontAwesomeIcon icon={faCircleUser} /> {name}</h4>
                <button onClick={deleteReviewHandler}><FontAwesomeIcon className="delete-review" icon={faTrash}/></button>
            </div>
            <div className="review-output-paragraph">
                <p><FontAwesomeIcon icon={faStar} size="sm" color="yellowgreen" /> {rating}/5</p>
                <p>{review}</p>
            </div>
        </div>
    );
}

export default ReviewOutput;