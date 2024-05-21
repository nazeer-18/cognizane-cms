import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/cognizance-logo.png'
import user from '../assets/user.svg'
import hamburger from '../assets/hamburger.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="hamburger">
                <button>
                    <svg aria-hidden="true" height="23" viewBox="0 0 16 16" version="1.1" width="23"  fill="#f0f3f6" padding="10px" data-view-component="true" class="octicon octicon-three-bars Button-visual">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                </button>
            </div>
            <div className="navbar-cognizance">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Cognizance Logo" />
                    </Link>
                </div>
                <div className="navbar-title">
                    Cognizance
                </div>
            </div>
            <div className="navbar-navigation">
                <div className="navbar-links-container">
                    <ul className="navbar-list">
                        <li className="navbar-link"> <Link exact to="/aboutus"> About Us </Link></li>
                        <li className="navbar-link"> <Link exact to="/events"> Events </Link></li>
                        <li className="navbar-link"> <Link exact to="/domains"> Domains </Link></li>
                        <li className="navbar-link"> <Link exact to="/alumini"> Alumini </Link></li>
                        <li className="navbar-link"> <Link exact to="/gallery"> Gallery </Link></li>
                        <li className="navbar-link"> <Link exact to="/contactus"> Contact Us </Link></li>
                    </ul>
                </div>
                <div className="navbar-user-container">
                    <img className='navbar-user' src={user} alt="" />
                </div>
            </div>
        </div>
    )
}
