import React from 'react'
import Card from 'react-bootstrap/Card'
import "../../css/items/CSS_projects.css"
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import LocalGrocer from '../Pages/LocalGrocer'

const ProjectItem = ({ imageLocation, title, githubLink, description, stackUsed, deployedButton, displayDeployButton, displayDetailButton, extraId, imageLocation2 }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='projects'>

            <Card className='' style={{ width: "40rem" }} >
                <Card.Body>
                    <Card.Title className=''>{title}</Card.Title>
                    {title === "TITAN" ?
                        <div>
                            <Card.Img id={extraId} src={imageLocation} ></Card.Img>
                            <Card.Img id={extraId} src={imageLocation2} ></Card.Img>
                        </div>
                        : <Card.Img id={extraId} src={imageLocation} ></Card.Img>}
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
                <Button className='deployedBtn' id={displayDeployButton} href={deployedButton} variant="light" >Deployment link</Button>
                <Button className='detailBtn' id={displayDetailButton} onClick={handleShow} variant="info">Details</Button>
            </div>

            <Modal dialogClassName='modal-width' show={show} onHide={handleClose}>
                <LocalGrocer handleClose={handleClose}></LocalGrocer>
            </Modal>

        </div>
    )
}

export default ProjectItem