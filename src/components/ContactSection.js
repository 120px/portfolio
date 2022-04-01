import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import "../css/CSS_contactsection.css"

const ContactSection = () => {
    return (
        <div className='contact-container container-fluid' id="contact">

            <div className='contact-info'>
                <p>contact & work</p>

                <div className='icons'>
                    <span>
                        <FontAwesomeIcon size='6x' icon={faLinkedin} />
                    </span>
                    <span>
                        <FontAwesomeIcon size='6x' icon={faGithub} />
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ContactSection