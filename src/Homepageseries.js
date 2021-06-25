import React from 'react';
import SerieslistBox from './SerieslistBox';
import Header from './Header';
import "./Homepage.css"
import Footer from './Footer';

class Homepageseries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { series : [] };
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData() {
        fetch(`/api/series`)
        .then((response)=>response.json())
        .then((series)=>{
            this.setState({series});
        });
    }
    render() {
        const { series } = this.state;

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
}
export default Homepageseries;