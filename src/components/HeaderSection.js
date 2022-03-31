import React from 'react'
import "../css/CSS_headersection.css"
import Button from 'react-bootstrap/Button';

const HeaderSection = () => {
    return (
        <div className='text-center header-text header-container container-fluid'>

            <div className='web-text'>
                <p>web</p>
            </div>
            <div className='developer-text'>
                <p>developer</p>
            </div>

        </div>
    )
}

export default HeaderSection