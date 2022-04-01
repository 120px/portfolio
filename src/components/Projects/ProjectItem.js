import React from 'react'
import Card from 'react-bootstrap/Card'
import "../../css/items/CSS_projects.css"
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import ProjectModal from '../ProjectModal'

const ProjectItem = ({ imageLocation, title, githubLink, description,  }) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () =>{
        setModal(!modal)
        console.log("yes")
    }

    return (
        <div className='projects'>

            <Card className='' style={{ width: "40rem"  }}>
                <Card.Body>
                    <Card.Title className=''>{title}</Card.Title>
                    <Card.Img src={imageLocation}></Card.Img>
                </Card.Body>
            </Card>

            <Button onClick={toggleModal} variant="primary">Check it out</Button>

            {modal ? <ProjectModal title={title} description={description}></ProjectModal> : null}

        </div>
    )
}

export default ProjectItem