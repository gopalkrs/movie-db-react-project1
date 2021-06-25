import Header from "./Header";
import Footer from "./Footer";
import "./Moviedbmainpage.css";
import Netflixsvg from "./netflix.svg";


function Moviedbmainpage() {
    return (
        <div className="whole-page-body">
            <Header />
            <div className="main-page-body">
                <div>
                    <h4 className="main-page-headline">Welcome, Lots of Movies and TV shows to discover here...Explore now.</h4>
                    <div className="main-page-images">
                        <img id= "backgound-image" alt= "background-image" src={Netflixsvg}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Moviedbmainpage;