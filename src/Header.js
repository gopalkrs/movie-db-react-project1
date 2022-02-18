import { Link } from "react-router-dom";
import "./styles/Header.css";
import LoginForm from "./LoginForm";
import React, { useState } from 'react';

function Header() {

    const [isLogin, setIsLogin] = useState(false);
    const [regState, setRegState] = useState("");

    const [popupForm, setPopupForm]= useState({
        visibility : "",
        opacity : ""
    });

    const handleLogin=()=>{
        setIsLogin(true);
        setRegState("Login");
        setPopupForm({
            visibility : "visible",
            opacity :"1"
        });
    }

    const handleSignup=()=>{
        setIsLogin(false);
        setRegState("Signup");
        setPopupForm({
            visibility : "visible",
            opacity :"1"
        });
    }

    return (
        <div className="nav-bar">
            <div className="section-nav-bar">
                <Link to="/" className="header-link">
                    <h1 className="header-logo">Filmatic <i className="fas fa-theater-masks" style={{color : "white"}} ></i></h1>
                </Link>
                <div className="login-buttons">
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignup}>Signup</button>
                </div>
            </div>
            <LoginForm 
            isLogin={isLogin}
            setIsLogin ={setIsLogin}
            regState={regState}
            setRegState={setRegState}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            popupForm={popupForm}
            setPopupForm= {setPopupForm} />
        </div>
    );
}

export default Header;