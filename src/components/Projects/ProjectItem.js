import React from 'react'
import Card from 'react-bootstrap/Card'
import "../../css/items/CSS_projects.css"
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ProjectItem = ({ imageLocation, title, githubLink, description, stackUsed, deployedButton, displayDeployButton, displayDetailButton }) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(prev => !prev)
        console.log("ASD")

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

                <Button href={githubLink} variant="primary">Link to Github</Button>
                <Button className='deployedBtn' id={displayDeployButton} href={deployedButton} variant="light">Deployment link</Button>
                <Button className='detailBtn' id={displayDetailButton} href={displayDetailButton} variant="info">Details</Button>
            </div>

        </div>
    )
}

export default ProjectItem