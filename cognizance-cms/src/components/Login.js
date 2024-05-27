import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import coglogo from '../assets/cognizance-logo.png'
import { Link } from 'react-router-dom'
import userService from '../services/userService'

export default function Login() {
    const Navigate = useNavigate();
    const [data, setData] = useState({
        userName: '',
        password: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await userService.login(data);
            const success = response.data.success;
            if(success){
                setTimeout(()=>{
                    alert('Login Successful');
                    Navigate('/')
                })
            }else{
                alert('Login Failed');
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="loginpage-container">
            <div className="login-image">
                <img src={coglogo} alt="cognizance-logo" />
            </div>
            <div className="login-container">
                <div className="welcome-msg">
                    Welcome to Cognizance
                </div>
                <div className="login-title">
                    <span>
                        Login
                    </span>
                </div>
                <div className="login-form">
                    <form action="">

                        <div className="login-form-component">
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter User Name"
                                onChange={(e) => {
                                    setData({ ...data, userName: e.target.value })
                                }} />
                        </div>
                        <div className="login-form-component">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value })
                                }}
                            />
                        </div>
                        <div className="login-form-adds">
                            <div className="remember-me">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <div className="forgot-pwd">
                                <Link to="/forgotpassword"> <span className="linear-txt"> Forgot Password ?</span></Link>
                            </div>
                        </div>
                        <div className="login-form-button">
                            <button onClick={handleSubmit}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="new-signup">
                    <p>New Member? <Link to="/signup"> <span className="linear-txt">Register Now</span></Link></p>
                </div>
            </div>
        </div>
    )
}
