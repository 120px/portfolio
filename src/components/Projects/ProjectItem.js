import React from 'react'
import Card from 'react-bootstrap/Card'
import "../../css/items/CSS_projects.css"
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import ProjectModal from '../ProjectModal'

const ProjectItem = ({ imageLocation, title, githubLink, description, stackUsed }) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
        console.log("yes")
    }

    return (
        <div className='projects'>

            <Card className='' style={{ width: "40rem" }}>
                <Card.Body>
                    <Card.Title className=''>{title}</Card.Title>
                    <Card.Img src={imageLocation}></Card.Img>
                    <Card.Footer>{description}</Card.Footer>
                </Card.Body>
            </Card>

            <div className='btn-stack-container'>
                <div className='stackused-container'>
                    {stackUsed != null || stackUsed !== undefined ?
                        stackUsed.map((item) =>
                            <span className='stackused'>{item}</span>
                        ) : null}
                </div>

                <Button href={githubLink} onClick={toggleModal} variant="primary">Check it out</Button>
            </div>

            {modal ? <ProjectModal title={title} description={description}></ProjectModal> : null}

        </div>
    )
}

export default ProjectItem