import React from 'react'
import '../styles/DomainItem.css' 

export default function DomainItem(props) {
    const domain = {
        name:props.domain.domainName,
        logo:props.domain.domainLogo,
        id:props.domain._id
    }
    return (
        <div>
            <div id="domain-item-container">
                <div id="domain-item-logo">
                    <img src={domain.logo} alt="domain-logo" />
                </div>
                <div id="domain-item-name">
                    {domain.name}
                </div>
            </div>
        </div>
    )
}
