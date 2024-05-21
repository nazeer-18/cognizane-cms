import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/cognizance-logo.png'
import user from '../assets/user.svg'

export default function Navbar() {
    const handleResponsiveness = () => {
        const responsiveNav = document.querySelector('.responsive-nav')
        responsiveNav.classList.toggle('responsive-nav-active')
    }
    return (
        <div>
            <div className="responsive-nav">
                <div className="hidden-heading">
                    <div className="hidden-logo">
                        <img src={logo} alt="cognizance-logo" />
                    </div>
                    <div className="hidden-close-nav">
                        <button onClick={handleResponsiveness} data-close-dialog-id="dialog-de35063c-9a5d-4a73-aa51-db47dc6dd726" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton">
                            <svg
                                fill="#f0f3f6"
                                aria-hidden="true"
                                height="20"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="20"
                                data-view-component="true"
                                class="octicon octicon-x">
                                <path
                                    d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="hidden-links">
                    <ul>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/aboutus"> About Us </Link></li>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/events"> Events </Link></li>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/domains"> Domains </Link></li>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/alumini"> Alumini </Link></li>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/gallery"> Gallery </Link></li>
                        <li className="navbar-link"> <Link onClick={handleResponsiveness} exact to="/contactus"> Contact Us </Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar">
                <div className="hamburger">
                    <button onClick={handleResponsiveness}>
                        <svg aria-hidden="true" height="23" viewBox="0 0 16 16" version="1.1" width="23" fill="#f0f3f6" padding="10px" data-view-component="true" class="octicon octicon-three-bars Button-visual">
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
        </div>
    )
}
