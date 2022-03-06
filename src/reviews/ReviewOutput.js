import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import '../styles/ReviewOutput.css';

function ReviewOutput ({id, review, rating}){

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
    useEffect(()=>{
        getData();
    }, []);

    return (
        <div className="review-output-div">
            <div className="review-output-header">
                <h4><FontAwesomeIcon icon={faCircleUser} /> {name}</h4>
            </div>
            <div className="review-output-paragraph">
                <p><FontAwesomeIcon icon={faStar} size="sm" color="yellowgreen" /> {rating}/5</p>
                <p>{review}</p>
            </div>
        </div>
    );
}

export default ReviewOutput;