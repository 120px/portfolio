import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ProjectModal = ({ title }) => {
    return (
        <div>

            <Modal

                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProjectModal