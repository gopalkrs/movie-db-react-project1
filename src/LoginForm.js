import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/LoginForm.css';
import axios from 'axios';

function LoginForm({isLogin, setIsLogin, setRegState, regState, setPopupForm, popupForm}) {

    const [userReg, setUserReg] = useState({
        username : "",
        email : "",
        password : ""
    });


    const cancelClickHandler=()=>{
        setPopupForm({
            visibility : "hidden",
            opacity : "0"
        });
        setUserReg({ username: "", email: "", password: ""});
    }

    const inputHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserReg({...userReg, [name] : value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newRecord = {...userReg, id : uuidv4()};
        console.log(newRecord);
        if(!isLogin){
            try{
                const promiseData = await axios.post(`/api/user/signup`, newRecord);
            }catch(err){
                console.log(err);
            }
        }
        
        cancelClickHandler();
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
                    <input type="text" required
                    autoComplete="off"
                    value={userReg.username}
                    onChange={inputHandler}
                    name="username" id="username" />
                </div>

                <div className="input-block">
                    <label htmlFor="email">Email</label>
                    <input type="email" required
                    autoComplete="off"
                    value={userReg.email}
                    onChange={inputHandler}
                    name="email" id="email" />
                </div>

                <div className="input-block">
                    <label htmlFor="password">Password</label>
                    <input type="password" required
                    autoComplete="off"
                    value={userReg.password}
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
                </div>
            </div>
        </div>
    );
}

export default LoginForm;