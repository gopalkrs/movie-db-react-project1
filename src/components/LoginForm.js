import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/LoginForm.css';
import axios from 'axios';

function LoginForm({isLogin, regState, setPopupForm, popupForm, setIsLogged}) {

    const [signupData, setsignupData] = useState({
        username : "",
        email : "",
        password : ""
    });
    const [loginData, setloginData] = useState({
        email : "",
        password : ""
    });

    const [loginMessage, setLoginMessage] = useState();

    const cancelClickHandler=()=>{
        setPopupForm({
            visibility : "hidden",
            opacity : "0"
        });
        if(!isLogin){
            setsignupData({ username: "", email: "", password: ""});
        }
        if(isLogin){
            setloginData({ email: "", password: ""});
        }
    }


    const inputHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        if(!isLogin){
            setsignupData({...signupData, [name] : value});
        }
        if(isLogin){
            setloginData({...loginData, [name] : value});
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!isLogin){
            const postSignup = {...signupData, id : uuidv4()};
            try{
                const promiseData = await axios.post(`/api/user/signup`, postSignup);
                setLoginMessage(promiseData.data.message);
            }catch(err){
                console.log(err);
            }
        }
        if(isLogin){
            const postLogin = {...loginData, id : uuidv4()};
            try{
                const promiseData = await axios.post(`/api/user/login`, postLogin);
                
                //setMessage(dataPromise.data.message);
                const {message} = promiseData.data;
                const {token} = promiseData.data.data;
                const {_id, username} = promiseData.data.data.existingUser;
                setLoginMessage(message);
                localStorage.setItem('userId', _id);
                localStorage.setItem('userName', username);
                localStorage.setItem('userToken', token);
                localStorage.setItem('isLogged', true);
                setIsLogged(JSON.parse(localStorage.getItem('isLogged')));

            }catch(err){
                const {message} = err.response.data;
                setLoginMessage(message);
            }
        }
        window.location.reload(false);
       //cancelClickHandler();
    }

    return (
        <div>
            <div className="modal-bg" style={{visibility : popupForm.visibility, opacity :popupForm.opacity}}>
                <div className="login-signup-form">
                <div className="inner-div">
                <form action="" onSubmit={handleSubmit}>
                <div className="header-login-popup">
                    <h2>{regState}</h2>
                </div>
                <div style={{display: isLogin? 'none' : 'block'}} className="input-block">
                    <label htmlFor="username">FullName</label>
                    <input type="text"
                    autoComplete="off"
                    onChange={inputHandler}
                    name="username" id="username" />
                </div>

                <div className="input-block">
                    <label htmlFor="email">Email</label>
                    <input type="email" required
                    autoComplete="off"
                    onChange={inputHandler}
                    name="email" id="email" />
                </div>

                <div className="input-block">
                    <label htmlFor="password">Password</label>
                    <input type="password" required
                    autoComplete="off"
                    onChange={inputHandler}
                    name="password" id="password" />
                </div>
                    <div className="button-class">
                        <input className="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
                </div>
                <div className="button-class">
                    <button className="submit-btn" onClick={cancelClickHandler}>Cancel</button>
                </div>
                <div className='error-message'>
                    <p>{loginMessage}</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;