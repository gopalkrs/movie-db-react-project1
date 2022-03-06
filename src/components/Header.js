import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import LoginForm from "./LoginForm";
import React, { useState,useEffect } from 'react';

function Header() {

    const [isLogin, setIsLogin] = useState(false);
    const [regState, setRegState] = useState("");

    const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('isLogged')));

    useEffect(()=>{
        setIsLogged(JSON.parse(localStorage.getItem('isLogged')));
    }, [])
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

    const handleLogout = ()=>{
        localStorage.setItem('userName', null);
        localStorage.setItem('isLogged', false);
        localStorage.setItem('userId', null);
        localStorage.setItem('userToken', null);
        setIsLogged(JSON.parse(localStorage.getItem('isLogged')));
        window.location.reload(false);
    }

    if(isLogged){
        return (
            <div className="nav-bar">
            <div className="section-nav-bar">
                <Link to="/" className="header-link">
                    <h1 className="header-logo">Filmatic <i className="fas fa-theater-masks" style={{color : "white"}} ></i></h1>
                </Link>
                <div className="user-logged-in">
                    <p><FontAwesomeIcon icon={faCircleUser} color="red"/> {localStorage.getItem('userName')}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
        );
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
            popupForm={popupForm}
            setPopupForm= {setPopupForm} 
            setIsLogged = {setIsLogged} />
        </div>
    );
}

export default Header;