import React from 'react'
import "../css/CSS_headersection.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const HeaderSection = () => {
    return (
        <div className='text-center header-text header-container container-fluid'>

            <div className='web-text'>
                <p>web</p>
            </div>
            <div className='developer-text'>
                <p>developer</p>
            </div>

            <div className='chevron-image'>
                <FontAwesomeIcon size='xl' icon={faChevronDown} />
            </div>
        </div>
    )
}

export default HeaderSection