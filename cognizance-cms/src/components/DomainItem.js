import React from 'react'
import '../styles/DomainItem.css'
import logo from '../assets/cognizance-logo.png'

export default function DomainItem() {
    return (
        <div>
            <div id="domain-item-container">
                <div id="domain-item-logo">
                    <img src={logo} alt="domain-logo" />
                </div>
                <div id="domain-item-name">
                    Competetive Programming
                </div>
            </div>
        </div>
    )
}
