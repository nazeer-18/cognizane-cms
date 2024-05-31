import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/DomainItem.css' 

export default function DomainItem(props) {
    const domain = {
        name:props.domain.domainName,
        logo:props.domain.domainLogo,
        id:props.domain._id
    }
    return (
        <div>
            <Link exact="true" to={"/domainExplore/:"+domain.id}>
            <div id="domain-item-container">
                <div id="domain-item-logo">
                    <img src={domain.logo} alt="domain-logo" />
                </div>
                <div id="domain-item-name">
                    {domain.name}
                </div>
            </div>
            </Link>
        </div>
    )
}
