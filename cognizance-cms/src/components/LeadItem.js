import React from 'react'
import '../styles/LeadItem.css'

export default function LeadItem(){
    return (
        <div id="lead-item-container">
            <div id="lead-identity">
                <div id="lead-img">
                    <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="lead-img" />
                </div>
                <div id="lead-name">
                    Nazeer
                </div>
                <div id="lead-post">
                    Co-ordinator
                </div>
                <div id="lead-domain">
                    Competetive Programming
                </div>
            </div>
            <div id="lead-contact-details">
                <div id="lead-mobile">
                    <span>Mobile : 8309377933</span>
                </div>
                <div id="lead-email">
                    <span>Email : shaiknazeer297@outlook.com</span>
                </div>
            </div>  
        </div>
    )
}