import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Moviepage extends React.Component {
    constructor(props) {
        super(props);
        this.state={ data: {} };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        const movieId=this.props.match.params.movieId;
        fetch(`/api/movies/${movieId}`)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState( {data} );
        });
    }
    render() {
        const {data} = this.state;
        return (
            <div className="movie-page-wrapper">
                <Header />
                <div className="section-moviepage">
                    <div className="movie-page-top-part">
                        <div className="movie-page-poster-container">
                            <img src={data.poster} alt={data.title}/>
                            <div className="movie-page-country-lang">
                                <p className="moviepage-country"><i class="fas fa-globe-asia"></i>{data.country}</p>
                                <p><i class="fas fa-language"></i>{data.language}</p>
                            </div>
                        </div>
                        <div className="movie-page-title-rating">
                            <h2 className="movie-page-title">{data.title}</h2>
                            <h3 className="movie-page-rating"><i class="fab fa-imdb"></i>{data.rating}</h3>
                        </div>
                        <h4 className="movie-page-genre">{data.genre}</h4>
                        <p className="movie-runtime"><i class="fas fa-clock"></i>{data.runtime}</p>
                    </div>
                    <div className="released-date-movie-page">
                        <h4>Released</h4>
                        <p>{data.released}</p>
                    </div>
                    <div className="movie-page-plot"><h4 className="title-fields-movie-page">Overview </h4><p>{data.plot}</p></div>
                    <div className="created-by">
                        <h4 className="title-fields-movie-page">Director</h4>
                        <p>{data.director}</p>
                    </div>
                    <div className="actors-movie-page">
                        <h4 className="title-fields-movie-page">Actors </h4>
                        <p>{data.actors}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Moviepage;