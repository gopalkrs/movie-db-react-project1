import React from 'react';
import MovielistBox from './MovielistBox';
import Header from './Header';
import "./Homepage.css"
import Footer from './Footer';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies : [] };
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData() {
        fetch(`/api/movies`)
        .then((response)=>response.json())
        .then((movies)=>{
            this.setState({movies});
        });
    }
    render() {
        const { movies } = this.state;

        return (
            <div>
                <Header/>
                <div className="section-homepage">
                    <div className="movie-list-homepage">
                        {movies.map((movie)=>{
                            const {id,title,poster,rating,genre} = movie;
                           return (
                               <MovielistBox
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
                <Footer/>
            </div>
        );
    }
}
export default Homepage;