import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import DomainItem from './DomainItem.js'
import '../styles/Domains.css'
import '../App.css'
import userService from '../services/userService'

export default function Domains() {
    const [domains, setDomains] = useState([]);
    useEffect(() => {
        const getDomains = async () => {
            try {
                const response = await userService.getDomains();
                const domains = response.data.domains;
                setDomains(domains);
            }
            catch (err) {
                console.log(err);
            }
        }
        getDomains();
    })
    return (
        <div>
            <p id="domain-page-title">Explore Our Expertise in Cutting-Edge Domains</p>
            <div className="domains-container">
                {
                    domains.map((domain)=>{
                        return <DomainItem domain={domain} key={domain._id} />
                    })
                }
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
