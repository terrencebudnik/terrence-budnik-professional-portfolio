import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/aboutme.css'

export default function AboutMe(props) {
    
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <h2 className='aboutHeader'>About Me</h2>
      </div>
      <Modal.Body>
        <p className='aboutBody'>
          I spent many years looking for my passion. My search allowed me to have amazing experiences in Los Angeles and Chicago. After some serious thought, I decided to take an online Python course. Something clicked and that started my interest in programming. I enjoy working on projects and utilizing my past in the performing arts to bring my own creative style. I am continuing my coding education through online courses while looking for an exciting opportunity in web development. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


