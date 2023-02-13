import React,{ useState, useEffect } from 'react';
import SeriesCard from './components/SeriesCard';
import Header from './components/Header';
import "./styles/Homepage.css"
import Footer from './components/Footer';
import { HashLoader } from 'react-spinners';

function Homepageseries() {
    
    const [series,setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/series`)
        .then((response)=>response.json())
        .then((data)=>{
            setSeries(data);
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
            <div>
                <Header/>
                <div className="section-homepage">
                    <div className="movie-list-homepage">
                        {series.map((serie)=>{
                            const {id,title,poster,rating,genre} = serie;
                           return (
                               <SeriesCard
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