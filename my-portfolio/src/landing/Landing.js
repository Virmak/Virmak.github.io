import './landing.css';
import { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {faGithub, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

class Landing extends Component {

    render() {
        return  (
     
            <section id="landing">
      
                <div className="content">              
                    <h1>Mohamed Ben Amar</h1>
                    <h2>Fullstack developer</h2>
        
                    <div className="icons">
                        <a href={this.props.profile.accounts.github}><FontAwesomeIcon icon={faGithub} color={colors.primary} size="lg" /></a>
                        <a href={this.props.profile.accounts.email}><FontAwesomeIcon icon={faEnvelope} color={colors.primary}  size="lg"/></a>
                        <a href={this.props.profile.accounts.linkedin}><FontAwesomeIcon icon={faLinkedin} color={colors.primary}  size="lg"/></a>
                        <a href={this.props.profile.accounts.twitter}><FontAwesomeIcon icon={faTwitterSquare} color={colors.primary}  size="lg"/></a>
                    </div>
        
                <div className="actions">
                        <div className="call-to-action btn"><a href="/resume/">See my resume</a></div>
                        <div>or</div>
                        <div>
                            <a href="#experiences"  style={seeMyWorkStyles}>See my work
                            <div>           .
                            <FontAwesomeIcon icon={faChevronDown} color={colors.primary}  size="lg"/>             
                            </div></a>
                        </div>
                </div>
                </div>
        
            </section>
        )
    }
}


export default Landing;


const seeMyWorkStyles = {
    fontWeight: 'bold',
}

const colors = {
    primary: '#041e43',
    bg: '#f5f6f8',
    accent: '#08469e',
}
  