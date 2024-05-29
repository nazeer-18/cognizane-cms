import React from 'react'
import { Link } from 'react-router-dom'
import DomainItem from './DomainItem.js'
import '../styles/Domains.css'
import '../App.css'

export default function Domains() {
    return (
        <div>
            <p id="domain-page-title">Explore Our Expertise in Cutting-Edge Domains</p>
            <div className="domains-container">
                <DomainItem />
                <DomainItem />
                <DomainItem />
                <DomainItem />
                <DomainItem />
                <DomainItem />
                <DomainItem />
            </div>
            <div className="engage-joining">
                <p>
                    wanna explore any domain?
                </p>
                <p>
                    What are you waiting for? <strong>Fill the below form to join us</strong> , we will be happy to have you on board. 😊
                </p>
            </div>
            <div className="cognizance-btn-container">
                <Link to="/get-membership">
                    <button className="cognizance-btn">Join a Domain</button>
                </Link>
            </div>
        </div>
    )
}
