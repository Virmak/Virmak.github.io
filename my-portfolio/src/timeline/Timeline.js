import { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import ScrollAnimation from 'react-animate-on-scroll';
import Modal from "../modal/Modal";


class TimelineItem extends Component {
    state = {
        projects: this.props.projects
    }

    render() {
        return this.props.projects.map((project, i) => {
            const position = i % 2 === 0 ? 'left' : 'right';
            return (

                <div
                    key={project.name}
                    className={"timeline-item item-" + position}
                    style={{ ...gridItemStyles[i % 2], gridRowStart: i + 1 }} >
                    <div className="content" onClick={(e) => this.openProjectModal(project, e)}>
                        <div style={itemHederStyles} className="header">
                            <span><FontAwesomeIcon icon={faInfoCircle} size="lg" className="project-info-icon" /></span>

                            <h3>
                                    {project.name}
                            </h3>
                        </div>
                                <ScrollAnimation animateIn="animate__fadeIn">
                        {
                            project.tasks.map((task, i) => (
                                <div key={i}>{task}</div>
                            ))
                        }</ScrollAnimation>
                        <Modal project={project} onModalClose={(e) => this.closeProjectModal(project, e)} />
                    </div>
                </div>
            );
        });
    }

    openProjectModal = (project, e) => {
        project.opened = true;
        this.setState({
            projects: this.state.projects
        });
    }
    closeProjectModal = (project, e) => {
        if (e) {
            e.stopPropagation();
        }
        project.opened = false;
        this.setState({
            projects: this.state.projects
        });
    }
}

export default TimelineItem;

const gridItemStyles = [
    {
        gridColumnStart: 1,
    },
    {
        gridColumnStart: 2,
    }
]

const itemHederStyles = {
    display: 'flex',
    marginBottom: '10px',
}
