import React from 'react'
import Card from 'react-bootstrap/Card'
import "../../css/items/CSS_projects.css"
import Button from 'react-bootstrap/Button'

const ProjectItem = ({ imageLocation, title }) => {
    return (
        <div className='projects'>

            <Card className='' style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className=''>{title}</Card.Title>
                    <Card.Img src={imageLocation}></Card.Img>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Button variant="primary">Check it out</Button>

        </div>
    )
}

export default ProjectItem