import React from 'react'
import "../../css/LocalGrocer/CSS_LocalGrocer.css"
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react'

const LocalGrocer = ({ handleClose }) => {

  return (
    <div className='container-fluid localgrocer-container'>

      <div className='title'>
        <p>Local Grocer</p>
        <p id="site-state" style={{ textAlign: "center", fontSize: "20px" }}>under construction*</p>
      </div>

      <div className='container-images'>
        <div>
          <img src={require("../../images/LocalGrocer/Overview.png")} loading="lazy"></img>
        </div>
      </div>

      <div className='container stack-container'>
        <div className='stack-title'>
          STACK
        </div>
        <div className='stack-image-container'>
          <div className='stack-image'>
            <img src={require("../../images/Stack/ReactLogo.png")} loading="lazy"></img>
          </div>

          <div className='stack-image'>
            <img src={require("../../images/Stack/MongoDb.png")} loading="lazy"></img>
          </div>

          <div className='stack-image nodejs-img'>
            <img src={require("../../images/Stack/NodeJS.png")}></img>
          </div>

          <div className='stack-image'>
            <img src={require("../../images/Stack/BootstrapLogo.png")}></img>
          </div>
        </div>
      </div>

      <div className='container goal-container'>
        <div className='goal-title'>
          <p>GOAL</p>
        </div>

        <div className='goal-description'>
          <p>Allow myself to explore a more creative, artistic approach when developing a website that was more visually appealing compared to my other work.
            Design came first, functionalities came later.
            Also, to learn a full tech stack that allowed me to explore my capabilties, as well as take on new challenges.</p>
        </div>
      </div>

      <div className='container-images'>
        <div>
          <img src={require("../../images/LocalGrocer/Grocery1.png")}></img>
        </div>
      </div>

      <div className='challenges-responsiveness'>
        <div className='challenges-title'>
          <p>CHALLENGES</p>
        </div>

        <div className='challenges-description'>
          <p>The most difficult challenge I have faced while working on this project so far is understanding how to get the user's cart working.
            I solved this issue through the use of Cookies and LocalStorage which allows me to know which user is logged in and what their cart information is.</p>
        </div>

        <div className='responsive-images-container'>
          <div className='responsive-images'>
            <div>
              <img src={require("../../images/LocalGrocer/mobile1.png")}></img>
            </div>
            <div>
              <img src={require("../../images/LocalGrocer/mobile2.png")}></img>
            </div>
            <div>
              <img src={require("../../images/LocalGrocer/mobile3.png")}></img>
            </div>
          </div>

        </div>

      </div>

      <div style={{ textAlign: "center", paddingBottom: 100 }}>
        <Button onClick={handleClose} size='lg'>close</Button>
      </div>
    </div>
  )
}

export default LocalGrocer