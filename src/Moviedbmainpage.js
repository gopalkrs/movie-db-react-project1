import Header from "./components/Header";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/Moviedbmainpage.css";
import Moviessvg from "./images/moviessvg.svg";
import Videostreaming from "./images/Videostreaming.svg"


function Moviedbmainpage() {
    return (
        <div className="whole-page-body">
            <Header />
            <div className="main-page-body">
                <div>
                    <h4 className="main-page-headline">Library of Movies and TV shows to discover here...Explore now.</h4>
                    <div className="main-page-images">
                        <img className= "background-image" alt= "streaming" src={Videostreaming}/>
                        <img className= "background-image" alt= "stream" src={Moviessvg}/>
                    </div>
                    <h4 className="main-page-headline">Sign In to rate and review your favorite movies/series.</h4>
                </div>
                <div className="button-movies">
                    <button className="styling-buttons"><Link to="/movies" className="link-text">Movies</Link></button>
                    <button className="styling-buttons"><Link to="/series" className="link-text">Series </Link></button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Moviedbmainpage;