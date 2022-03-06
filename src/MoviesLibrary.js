import React, { useState,useEffect } from 'react';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import './styles/Homepage.css';
import Footer from './components/Footer';
import { HashLoader } from 'react-spinners';

function Homepage(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`/api/movies`)
        .then((response)=>response.json())
        .then((data)=>{
            setMovies(data);
            setLoading(false);
        });
    },[]);

    if(loading){
        return (
            <div>
                <Header />
                <div className='spinner-comp'>
                    <HashLoader loading size={140} color='#e64242'/>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="homepage-main-container">
            <Header/>
            <div className="section-homepage">
                <div className="movie-list-homepage">
                    {movies.map((movie)=>{
                        const {id,title,poster,rating,genre} = movie;
                        return (
                            <MovieCard
                            key={id}
                            id={id}
                            title={title}
                            rating={rating}
                            poster={poster}
                            genre={genre}
                            />
                        );
                    })}
                </div>
            </div>
        <Footer />
        </div>
    );
}
export default Homepage;