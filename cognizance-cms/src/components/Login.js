import React from 'react'
import '../styles/Login.css'
import coglogo from '../assets/cognizance-logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
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
                    Login
                </div>
                <div className="login-form">
                    <form action="">

                        <div className="login-form-component">
                            <input type="text" id="username" placeholder="Enter User Name" />
                        </div>
                        <div className="login-form-component">
                            <input type="password" id="password" placeholder="Enter Password" />
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
                            <button>Login</button>
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
