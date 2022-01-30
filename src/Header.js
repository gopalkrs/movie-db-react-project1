import { Link } from "react-router-dom";
import "./styles/Header.css"

function Header() {
    return (
        <div className="nav-bar">
            <div className="section-nav-bar">
                <Link to="/" className="header-link">
                    <h1 className="header-logo">Filmatic<i class="fas fa-theater-masks"></i></h1>
                </Link>
            </div>
        </div>
    );
}

export default Header;