import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import "../css/CSS_contactsection.css"

const ContactSection = () => {
    return (
        <div className='contact-container container-fluid' id="contact">

            <div className='contact-info'>
                <p>contact</p> 
                <p>&</p> 
                <p>work</p>

                <div className='icons'>
                    <span>
                        <a href='https://www.linkedin.com/in/steven-9434781b1/'><FontAwesomeIcon  size='6x' icon={faLinkedin} /></a>
                    </span>
                    <span>
                        <a href='https://github.com/sdifeo'><FontAwesomeIcon size='6x' icon={faGithub} /></a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ContactSection