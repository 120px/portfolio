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
                    githubLink = {data.githubLink}>

                </ProjectItem>
            )}

            

        </div>
    )
}

export default Project