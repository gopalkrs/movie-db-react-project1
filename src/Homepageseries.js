import React,{ useState, useEffect } from 'react';
import SerieslistBox from './SerieslistBox';
import Header from './Header';
import "./styles/Homepage.css"
import Footer from './Footer';

function Homepageseries() {
    
    const [series,setSeries] = useState([]);
    
    useEffect(()=>{
        fetch(`/api/series`)
        .then((response)=>response.json())
        .then((data)=>{
            setSeries(data);
        });
    },[series])
        return (
            <div>
                <Header/>
                <div className="section-homepage">
                    <div className="movie-list-homepage">
                        {series.map((serie)=>{
                            const {id,title,poster,rating,genre} = serie;
                           return (
                               <SerieslistBox
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
export default Homepageseries;