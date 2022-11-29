import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/resume.css'
import myResume from '../Assets/myResume.pdf'


export default function Resume(props) {

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <div>
        <h2 className='resumeHeader'>Resume Preview</h2>
      </div>
      <Modal.Body>
        
        <ul className='resumeBody'>
            <li>
                Front-End: React, HTML, JavaScript, CSS, Bootstrap
            </li>
        </ul>

        <ul className='resumeBody'>
            <li>
            Back-End: Node.js, Express, API's, SQL, Mongo
            </li>
        </ul>
        

        <ul className='resumeBody'>
            <li>
                Education: Northwestern Full-Stack Web Development
            </li>
        </ul>
       

        <ul className='resumeBody'>
            <li>
                Work Experience: Recruiting Manager, Branch Manager, Project Manager 
            </li>
        </ul>
        

      </Modal.Body>
        <Modal.Footer>
          <a href={myResume} target="_blank" style={{color: "black", marginRight: "225px"}}>Download My Full Resume</a>
          <Button variant ="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


