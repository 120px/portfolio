import React from 'react'
import "../css/CSS_projectsection.css"
import Project from './Projects/Project'
import ProjectItem from './Projects/ProjectItem'

const ProjectSection = ({}) => {
    return (
        <div className='project-container' id="projects">

            <div className='project-header text-center'>

                <div className='header-line1'>
                    <p>Take a look at my </p>
                </div>
                <div className='header-line2'>
                    <p>most recent work </p>
                </div>

            </div>

            <Project></Project>

        </div>
    )
}

export default ProjectSection