import Header from "./Header";
import Footer from "./Footer";
import "./Moviedbmainpage.css";
import Moviessvg from "./moviessvg.svg";
import Backgroundimg from "./background.jpg";


function Moviedbmainpage() {
    return (
        <div className="whole-page-body">
            <Header />
            <div className="main-page-body">
                <div>
                    <h4 className="main-page-headline">Welcome, Lots of Movies and TV shows to discover here...Explore now.</h4>
                    <div className="main-page-images">
                        <img className= "background-image" alt= "background-image-svg" src={Moviessvg}/>
                        <img className= "background-image-jpg" alt= "background-image-jpg" src={Backgroundimg}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Moviedbmainpage;