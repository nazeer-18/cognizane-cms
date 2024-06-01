import React, { useState} from "react";
import '../styles/SkillItem.css'

export default function SkillItem(props) {
    const [skill] = useState({
        skillName: props.skill.name,
        skillLogo: props.skill.imageUrl
    })
    return (
        <div id="skill-container">
            <div id="skill-img">
                <img src={skill.skillLogo} alt="skill-logo" />
            </div>
            <div id="skill-name">
                {skill.skillName}
            </div>
        </div>
    )
}