import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import userServices from '../services/userService'
import '../styles/DomainExplore.css'
import LeadItem from './LeadItem'
import SkillItem from './Skillltem'

export default function DomainExplore(props) {
    const { value } = useParams();
    const [domain, setDomain] = useState({
        domainName: '',
        domainLogo: '',
        domainDescription: ''
    })
    useEffect(() => {
        const getDomain = async () => {
            try {
                const res = await userServices.getDomainById({ "id": value.split(':')[1] });
                if (res.data.success) {
                    setDomain({
                        domainName: res.data.domain.domainName,
                        domainLogo: res.data.domain.domainLogo,
                        domainDescription: res.data.domain.domainDescription
                    })
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getDomain();
    }, [value])

    return (
        <div>
            <div id="domain-explore-container">
                <div className="domainexplore-item-container">
                    <div id="domainexplore-item-logo">
                        <img src={domain.domainLogo} alt="domain-logo" />
                    </div>
                    <div id="domainexplore-item-name">
                        {domain.domainName}
                    </div>
                </div>
                <div id="about-domain-container">
                    <p>
                        About the domain :
                    </p>
                    <div id="about-domain-content">

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium praesentium mollitia, id quos aliquid error consectetur. Unde, error molestias odio animi iure culpa voluptatum ea qui mollitia porro harum tenetur earum adipisci ratione voluptate, dolore eos dolores enim tempore sunt consectetur recusandae officia. Obcaecati, cumque tenetur illum, iure sapiente perspiciatis sunt soluta inventore esse delectus mollitia dolor ab alias minima. Dolorum minus sit optio, mollitia aspernatur eveniet id, enim debitis odio neque dolores. Soluta explicabo necessitatibus odio ipsum maxime molestiae tempora, quas id similique obcaecati magnam quibusdam placeat, quia sapiente ipsa quisquam rem assumenda, nihil sit eveniet corporis magni. Atque voluptatem incidunt consequuntur quia laboriosam sapiente nulla quo tempore expedita. Eum, ad, expedita sed nostrum praesentium odio cum reprehenderit neque, temporibus consequatur ea officiis. Labore, sunt est aspernatur cumque repellendus harum maiores soluta facilis totam nam dolore sequi magnam repudiandae veniam ipsa aut delectus in deserunt autem nulla tempore alias. Dolorem voluptatem iusto asperiores quaerat ipsam repellat, necessitatibus nulla quod rerum impedit nam voluptates illum! Itaque, recusandae? Quis, molestias animi doloribus repellat necessitatibus aliquam iste eligendi vitae praesentium qui accusamus delectus neque fuga. Numquam eveniet atque harum maxime at? Repellat ad blanditiis sequi molestias architecto distinctio dicta aspernatur laboriosam eligendi?
                    </div>
                </div>
                <div id="domain-leads-container">
                    <p>
                        Know your domain Leads!
                    </p>
                    <div id="domain-leads-content">
                        <LeadItem />
                        <LeadItem />
                        <LeadItem />
                        <LeadItem />
                    </div>
                </div>
                <div id="domain-skills-container">
                    <p>
                        Skills you can master in this domain
                    </p>
                    <div id="domain-skills-content">
                        <SkillItem/>
                        <SkillItem/>
                        <SkillItem/>
                        <SkillItem/>
                    </div>
                </div>
            </div>
            <div className="engage-joining">
                <p>
                    Do you wanna master these skills and make your <strong>resume</strong> strong??
                </p>
                <p>
                    You can!! , <strong>Fill the below form to join us.</strong>😊
                </p>
            </div>
            <div className="cognizance-btn-container">
                <Link to="/get-membership">
                    <button className="cognizance-btn">Membership Form</button>
                </Link>
            </div>
        </div>
    )
}