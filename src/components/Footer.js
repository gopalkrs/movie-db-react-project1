import "../styles/Footer.css"

function Footer () {
    return (
        <div className="footer-section">
            <div className="footer-wrapper">
            <div className="social-media">
                <a href="https://github.com/gopalkrs/"><i className="fab fa-github"></i></a>
                <a href="mailto:raunakchd1@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/gopal-choudhary-272bb3207/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="footer-para">
                <p>&#169; Made with &#10084; by Gopal Choudhary</p>
            </div>
            </div>
        </div>
    );
}
export default Footer;