import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <div className="nav-bar">
            <div className="section-nav-bar">
                <Link to="/" className="header-link">
                    <h1 className="header-logo">FilmaticDB</h1>
                </Link>
                <div className="button-movies">
                    <Link to="/movies">
                        <button className="styling-buttons">Movies</button>
                    </Link>
        
                    <Link to="/series">
                        <button className="styling-buttons">Series</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;