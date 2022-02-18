import React from 'react';
import { Link } from "react-router-dom";
import "./styles/MovielistBox.css";

function MovielistBox(props) {

    const { id,title,poster,rating,genre } = props;
    return (
        <Link to={`/movies/${id}`} className = "movie-list-item">
            <div className="movie-list-item-wrapper">
                <div className="movie-list-item-img">
                    <img src={poster} alt={title}/>
                </div>
                <div className="movie-list-item-desc">
                    <h3 className="movie-list-item-title">{title}</h3>
                    <h4 className="genre-list-item">{genre}</h4>
                    <p className="movie-list-item-rating"><i class="fab fa-imdb"></i> : {rating}</p>
                </div>
            </div>
        </Link>
    );
}
export default MovielistBox;