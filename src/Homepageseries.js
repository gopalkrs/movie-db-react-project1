import React,{ useState, useEffect } from 'react';
import SerieslistBox from './SerieslistBox';
import Header from './Header';
import "./styles/Homepage.css"
import Footer from './Footer';
import { HashLoader } from 'react-spinners';

function Homepageseries() {
    
    const [series,setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`/api/series`)
        .then((response)=>response.json())
        .then((data)=>{
            setSeries(data);
            setLoading(false);
        });
    },[series]);

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