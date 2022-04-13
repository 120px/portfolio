import React from 'react'
import ProjectItem from './ProjectItem'
import fileData from "../../data.json"
import { useEffect } from 'react'

const Project = ({ }) => {

    return (
        <div className=''>

            {fileData.map((data, index) =>
                <ProjectItem
                    id={index}
                    imageLocation={data.imageLocation}
                    title={data.title}
                    description = {data.description} 
                    githubLink = {data.githubLink}
                    stackUsed = {data.stackUsed}
                    deployedButton = {data.deployedButton}
                    displayDeployButton = {data.displayDeployButton}
                    isDisabled = {data.isDisabled}
                    displayDetailButton = {data.displayDetailButton}
                    >

                </ProjectItem>
            )}

            

        </div>
    )
}

export default Project