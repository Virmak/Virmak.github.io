import './modal.css';
import { Component } from 'react';
import ImageSlider from '../slider/ImagerSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


class Modal extends Component {
    render() {
        let gitRepo = null, liveLink = null;
        if (this.props.project.github) {
            gitRepo = <a href={this.props.project.github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />  &nbsp;Git repository
                    </a>;
        } else {
            gitRepo = <div></div>
        }
        if (this.props.project.link) {
            liveLink = <a href={this.props.project.link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />  &nbsp;Live link
                    </a>;
        } else {
            liveLink = <div></div>
        }
        return (
            <div className="modal" onClick={(e) => e.target.classList.contains('modal') &&this.props.onModalClose(e)} style={{ display: this.props.project.opened ? 'block' : 'none' }}>



                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.onModalClose}>&times;</span>
                        <h2 style={{ marginBottom: 0 }}>{this.props.project.name}</h2>
                        <small style={infoStyles}>{this.props.project.info}</small>
                    </div>
                    <div className="project-info">
                        <div>
                            <h4>Description</h4>
                            <p>{this.props.project.description}</p>
                        </div>
                        <div>
                            <h4>Role</h4>
                            <p>{this.props.project.role}</p>
                        </div>
                        <div className="links">
                            <h4>Additional links</h4>
                            {gitRepo}
                           {liveLink}
                        </div>
                        <div className="stack">
                            <h4>Stack: </h4> {
                                this.props.project.stack.map(tech => (
                                    <div key={tech}>{tech}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="modal-body">

                        <ImageSlider images={this.props.project.imgs} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;

const infoStyles = {
    marginBottom: '20px',
    display: 'block'
}