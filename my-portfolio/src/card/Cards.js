import { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faGlobe, faLaptopCode, faToolbox, faTools, faBook } from '@fortawesome/free-solid-svg-icons'


const SKILLS_ICONS = {
    "Programming Languages": faCode,
    "Databases": faDatabase,
    "Frameworks": faToolbox,
    "Frontend & Libraries": faLaptopCode,
    "Web Development": faGlobe,
    "Tools": faTools,

};
class Cards extends Component {

    render() {
        return this.props.skills.map(category => {
            return (
                <div key={category.name} className="card">
                    
                    <FontAwesomeIcon icon={SKILLS_ICONS[category.name]} size="4x"></FontAwesomeIcon>
                    <h3>{category.name}</h3>
                    <p>{category.value}<div className="tooltip-text">{category.value}</div></p>
                </div>
            )
        });
    }
}


export default Cards;
