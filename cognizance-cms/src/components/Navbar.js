import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/cognizance-logo.png'
import user from '../assets/user.svg'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-cognizance">
                <div className="navbar-logo">
                    <img src={logo} alt="Cognizance Logo" />
                </div>
                <div className="navbar-title">
                    Cognizance
                </div>
            </div>
            <div className="navbar-navigation">
                <ul className="navbar-list">
                    <li className="navbar-link"> <Link exact to="/aboutus"> About Us </Link></li>
                    <li className="navbar-link"> <Link exact to="/events"> Events </Link></li>
                    <li className="navbar-link"> <Link exact to="/domains"> Domains </Link></li>
                    <li className="navbar-link"> <Link exact to="/alumini"> Alumini </Link></li>
                    <li className="navbar-link"> <Link exact to="/gallery"> Gallery </Link></li>
                    <li className="navbar-link"> <Link exact to="/contactus"> Contact Us </Link></li>
                    <li className="navbar-link"> <img className='navbar-user' src={user} alt="" /> </li>
                </ul>
            </div>
        </div>
    )
}
