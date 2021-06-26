import Header from "./Header";
import Footer from "./Footer";
import "./Moviedbmainpage.css";
import Moviessvg from "./moviessvg.svg";
import Backgroundimg from "./background.jpg";
import Videostreaming from "./Videostreaming.svg"


function Moviedbmainpage() {
    return (
        <div className="whole-page-body">
            <Header />
            <div className="main-page-body">
                <div>
                    <h4 className="main-page-headline">Welcome, Lots of Movies and TV shows to discover here...Explore now.</h4>
                    <div className="main-page-images">
                        <div className="svg-images-main-page">
                            <img className= "background-image" alt= "streaming-image" src={Videostreaming}/>
                            <img className= "background-image" alt= "stream-image" src={Moviessvg}/>
                        </div>
                        <img className= "background-image-jpg" alt= "background-image-movies" src={Backgroundimg}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Moviedbmainpage;